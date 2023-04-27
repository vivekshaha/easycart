import { useEffect, useState } from "react";
import ProjectDetail from "./Product";
import { getProducts } from "./https";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { range } from "lodash";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  // const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [allData, setData] = useState({});
  // const [sort, setSort] = useState("default");
  // const [pageNo, setPageNo] = useState(1);

  const [searchParam, setsearchParam] = useSearchParams();
  const params = Object.fromEntries([...searchParam]);
  let { sort, pageNo, query } = params;
  pageNo = +pageNo || 1;
  sort = sort || "default";
  query = query || "";

  function updatesort(event) {
    setsearchParam({ ...params, sort: event.target.value }, { replace: false });
    // console.log(sort);
  }
  // console.log(pageNo);

  function updatequery(event) {
    setsearchParam(
      { ...params, query: event.target.value, pageNo: 1 },
      { replace: false }
    );
  }
  useEffect(() => {
    let sortBy;
    let sortType;
    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price";
    } else if (sort == "HightoLow") {
      sortBy = "price";
      sortType = "desc";
    }
    setLoading(true);
    getProducts(sortBy, pageNo, query, sortType).then((body) => {
      setData(body);
      setLoading(false);
    });
  }, [sort, pageNo, query]);
  const Products = allData.data;
  // const Products = allData.filter((a) => {
  //   return a.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  // });

  // useMemo(() => {
  //   if (sort == "priceasc") {
  //     Products.sort((a, b) => {
  //       console.log("price as is claled");
  //       return a.price - b.price;
  //     });
  //   } else if (sort == "pricedsc") {
  //     Products.sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //   } else if (sort == "title") {
  //     Products.sort((a, b) => {
  //       return a.title > b.title ? 1 : -1;
  //     });
  //   }
  // }, [sort]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="px-24 py-20 my-16 bg-white ">
        <div className="flex justify-end mb-8">
          <input
            className="w-56 p-2 ml-2 border border-black border-solid focus:outline-none"
            type="text"
            value={query}
            placeholder="Search for the Product"
            onChange={updatequery}
          />
          <select
            value={sort}
            onChange={updatesort}
            className="w-56 p-2 ml-2 border border-black border-solid focus:outline-none"
          >
            <option value="default">Default sorting</option>
            <option value="price">Sort by price: Low to High</option>
            <option value="HightoLow">Sort by price: High to Low</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-9">
          {Products.map((product) => (
            <ProjectDetail key={product.id} {...product} />
          ))}
        </div>
        {/* {pageNo > 1 && (
          <button
            className="p-3 ml-1 text-white rounded-sm bg-primary"
            onClick={() => setPageNo(pageNo - 1)}
          >
            Icons
          </button>
        )}
        {pageNo == allData.meta.last_page && (
          <button
            className="p-3 ml-1 text-white rounded-sm bg-primary"
            onClick={() => setPageNo(pageNo - 1)}
          >
            {pageNo - 1}
          </button>
        )} */}
        {range(1, allData.meta.last_page + 1).map((pageno) => {
          return (
            // pageNo == pageno &&
            <Link
              key={pageno}
              className={
                "p-3 ml-1 text-white rounded-sm bg-primary " +
                (pageno == pageNo ? "bg-primary" : "bg-amber-300")
              }
              // onClick={() => setPageNo(pageno)}
              to={
                "?" +
                new URLSearchParams({
                  ...params,
                  pageNo: pageno,
                })
              }
            >
              {pageno}
            </Link>
          );
        })}
        {/* {pageNo == 1 && (
          <button
            className="p-3 ml-1 text-white rounded-sm bg-primary"
            onClick={() => setPageNo(pageNo + 1)}
          >
            {pageNo + 1}
          </button>
        )}

        {allData.meta.last_page > pageNo && (
          <button
            className="p-3 ml-1 text-white rounded-sm bg-primary"
            onClick={() => setPageNo(pageNo + 1)}
          >
            Icons
          </button>
        )} */}

        {Products.length == 0 && (
          <NoMatching>
            We we add the product shortly till look for the listed items
          </NoMatching>
        )}
      </div>
    </>
  );
}

export default ProductList;
