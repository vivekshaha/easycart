import React from "react";
import { Link } from "react-router-dom";

const Product = ({ category, title, review, price, thumbnail, id }) => {
  return (
    <>
      <div className="bg-gray-600 ">
        <div className="w-40 h-48">
          <img
            className="object-cover w-full h-full overflow-hidden"
            src={thumbnail}
          />
        </div>
        <Link to={"/products/" + id}>view Detail</Link>
        <h1>{category}</h1>
        <h2 className="text-xl">{title}</h2>
        <h2 className="">{review}</h2>
        <h3 className="text-xl">{price}</h3>
        <Link to="/">Back to Home</Link>
      </div>{" "}
    </>
  );
};

export default Product;
