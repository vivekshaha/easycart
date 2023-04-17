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
      <div className="grow">
        <input
          type="text"
          value={query}
          className="border-4 "
          placeholder="enter you serch"
          onChange={updatequery}
        />
        <select value={sort} onChange={updatesort}>
          <option value="default">Default short</option>
          <option value="priceasc">Price:Low to High</option>
          <option value="pricedsc">Price:High to low</option>
          <option value="title">shot by title</option>
        </select>
        <div className="grid grid-cols-3">
          {Products.map((product) => (
            <ProjectDetail key={product.id} {...product} />
          ))}
        </div>
        {Products.length == 0 && (
          <NoMatching>
            Pls serch for another keyworid their is no matching
          </NoMatching>
        )}
      </div>
    </>
  );
}

export default ProductList;
