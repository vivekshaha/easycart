import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const CartItems = (product) => {
  console.log(product);
  return (
    <div className="flex items-center justify-center border-b border-x border-primary">
      <AiTwotoneDelete className="w-20 text-2xl text-primary" />
      <div className="w-32 p-2">
        <img
          src="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg"
          className="w-16 h-16"
        />
      </div>
      <h1 className="font-bold w-96">Title of the Products</h1>
      <h1 className="font-bold w-28">Price</h1>
      <h1 className="w-32 font-bold">quantity</h1>
      <h1 className="w-32 font-bold">subtotal</h1>
    </div>
  );
};

export default CartItems;
