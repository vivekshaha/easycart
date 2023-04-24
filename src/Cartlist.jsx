import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";

const Cartlist = ({ cartitems, localcart, setLocalcart, handleRemove }) => {
  return (
    <>
      <div className="px-24 py-20 my-16 text-black bg-white">
        <div>
          <div className="flex border border-primary">
            <h1 className="w-3/5 px-2 py-3 font-bold text-center">Product</h1>
            <h1 className="px-2 py-3 font-bold w-28">Price</h1>
            <h1 className="px-2 py-3 font-bold w-28">Quantity </h1>
            <h1 className="px-2 py-3 font-bold w-28">Subtotal</h1>
          </div>
          {cartitems.length !== 0 ? (
            cartitems.map((item) => {
              return (
                <CartItems
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  value={localcart[item.id]}
                  key={item.id}
                  id={item.id}
                  localcart={localcart}
                  setLocalcart={setLocalcart}
                  handleRemove={handleRemove}
                />
              );
            })
          ) : (
            <h1>khali hi tera cart</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cartlist;
