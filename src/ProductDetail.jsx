import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "./https";
import NotFound from "./NotFound";
const ProductDetail = ({ cartDetail }) => {
  const id = +useParams().id;
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();

  function handlecount(event) {
    setCount(event.target.value);
  }

  function addCart() {
    cartDetail(id, count);

    setCount(1);
  }
  useEffect(() => {
    setCount(1);
    const data = getProductDetail(id);

    data
      .then((a) => {
        setProduct(a);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <div>loading</div>
      </>
    );
  }

  return (
    <>
      {product ? (
        <>
          <Link to="/">Back to Home</Link>
          <img src={product.thumbnail} className="w-20" alt="" />
          <h1>{product.title}</h1>
          <div>thi is Product deail Page</div>
          <input
            type="number"
            value={count}
            onChange={handlecount}
            className="w-20 border-2 rounded-md"
          />
          {count > 0 && (
            <button className="px-2 bg-red-400 rounded-md" onClick={addCart}>
              Add To Cart
            </button>
          )}

          {id > 1 && <Link to={"/products/" + (id - 1)}>back</Link>}
          <Link to={"/products/" + (id + 1)}>forward</Link>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ProductDetail;
