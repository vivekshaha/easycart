import React, { useEffect, useState } from "react";
import CartTotal from "./CartTotal";
import Cartlist from "./Cartlist";
import { withCart } from "./withProvider";

const CartPage = () => {
  return (
    <>
      <div className="px-24 py-20 my-16 text-black bg-white">
        <Cartlist />
        <div className="flex justify-end">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default withCart(CartPage);
