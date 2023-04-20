import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { getProductDetail } from "./https";

const Cart = ({ cart }) => {
  console.log("cartitem is running", cart, Object.keys(cart));

  // const [cartitem, setCart] = useState([]);
  // useEffect(() => {
  //   const promises = Object.keys(cart).map((a) => {
  //     return getProductDetail(a);
  //   });
  //   const cartData = Promise.all(promises);
  //   console.log("cart is running");
  //   cartData.then((a) => {
  //     setCart(a);
  //     console.log(a);
  //   });
  // });

  // if (!cartitem) {
  //   return <div>Yaar shopping to kar le phale</div>;
  // }
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
          {/* {cartitem.map((a) => {
            <CartItems prodcut={a} />;
          })} */}
          <CartItems />
        </div>
        <div className="flex justify-end">
          {" "}
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
