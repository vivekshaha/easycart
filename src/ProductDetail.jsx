import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "./https";
import NotFound from "./NotFound";
import Loading from "./Loading";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { withCart } from "./withProvider";

const ProductDetail = ({ addToCart }) => {
  const id = +useParams().id;
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();

  function handlecount(event) {
    setCount(event.target.value);
  }

  function addCart() {
    addToCart(id, count);

    setCount(1);
  }
  useEffect(() => {
    // setCount(1);
    setLoading(true);
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
        <div className="flex items-center justify-center ">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <div className="grow">
      {product ? (
        <>
          <div className="px-24 py-20 my-16 bg-white">
            <Link to="/" className="">
              <BsArrowLeft className="text-2xl text-primary" />
            </Link>
            <div className="flex mt-4">
              <img
                src={product.thumbnail}
                className="w-2/4 mr-4 border h-96"
                alt=""
              />
              <div>
                <h1 className="mb-3 text-3xl">{product.title}</h1>
                <h1 className="mb-3 text-2xl font-bold">
                  &#36;{product.price}
                </h1>
                <h1 className="text-sm mb-7">{product.description}</h1>
                <input
                  type="number"
                  value={count}
                  onChange={handlecount}
                  className="w-10 py-2 border focus:outline-none"
                />
                {count > 0 && (
                  <button
                    className="px-10 py-2 ml-4 font-bold text-white rounded-md bg-primary"
                    onClick={addCart}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                {id > 1 && (
                  <Link to={"/products/" + (id - 1)}>
                    <BsArrowLeft className="text-2xl text-primary" />
                    Previous
                  </Link>
                )}
              </div>
              <div>
                <Link to={"/products/" + (id + 1)}>
                  <BsArrowRight className="text-2xl text-primary" />
                  Next
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default withCart(ProductDetail);
