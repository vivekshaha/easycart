import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "./conecter";
import { AiOutlineStar } from "react-icons/ai";

const Product = ({ category, title, review, price, thumbnail, id }) => {
  return (
    <>
      <div className="">
        <Link to={"/products/" + id}>
          <div className="mb-3 border w-80 h-80">
            <img
              className="object-cover w-full h-full overflow-hidden"
              src={thumbnail}
            />
          </div>
        </Link>
        <h3 className="text-sm text-gray-light">{capitalize(category)}</h3>
        <Link to={"/products/" + id}>
          <h1 className="text-base font-bold">{title}</h1>
        </Link>
        <div className="flex ">
          <AiOutlineStar className="text-primary" />
          <AiOutlineStar className="text-primary" />
          <AiOutlineStar className="text-primary" />
          <AiOutlineStar className="text-primary" />
          <AiOutlineStar className="text-primary" />
        </div>
        <h2 className="">{review}</h2>
        <h3 className="text-base font-bold">&#36;{price}</h3>
      </div>
    </>
  );
};

export default Product;
