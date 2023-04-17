import { useEffect, useState } from "react";
import ProjectDetail from "./Product";
import { getProducts } from "./https";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function ProductList() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");
  const [allData, setData] = useState([]);
  function updatequery(event) {
    setQuery(event.target.value);
  }
  useEffect(() => {
    const data = getProducts();
    data.then((a) => {
      setData(a);
      setLoading(false);
    });
  }, []);
  const Products = allData.filter((a) => {
    return a.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  function updatesort(event) {
    setSort(event.target.value);
    console.log(sort);
  }

  if (sort == "priceasc") {
    Products.sort((a, b) => {
      console.log("price as is claled");
      return a.price - b.price;
    });
  } else if (sort == "pricedsc") {
    Products.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort == "title") {
    Products.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  }

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
            <option value="priceasc">Sort by price: Low to High</option>
            <option value="pricedsc">Sort by price: High to Low</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-9">
          {Products.map((product) => (
            <ProjectDetail key={product.id} {...product} />
          ))}
        </div>
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
