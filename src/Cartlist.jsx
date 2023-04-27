import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import { withCart } from "./withProvider";

const Cartlist = ({ cart, updatecart }) => {
  const [quantityMap, setQuantityMap] = useState({});
  const cartToQuantityMap = cart.reduce(
    (m, p) => ({ ...m, [p.product.id]: p.quantity }),
    {}
  );

  function handleRemove(pid) {
    // const id = +event.currentTarget.getAttribute("productid");
    // const newCart = { ...cart }; // delete newCart[pid];
    const newQuantityMap = cartToQuantityMap;
    delete newQuantityMap[pid];
    updatecart(newQuantityMap);
  }
  useEffect(() => {
    setQuantityMap(cartToQuantityMap);
  }, [cart]);
  function handlechange(id, newvalue) {
    // const pid = event.target.getAttribute("productid");
    // console.log(id, newvalue);
    const newquantityMap = { ...quantityMap, [id]: newvalue };
    setQuantityMap(newquantityMap);
  }
  function handleupdateclick() {
    updatecart(quantityMap);
  }
  return (
    <>
      <div>
        <div className="flex border border-primary">
          <h1 className="w-3/5 px-2 py-3 font-bold text-center">Product</h1>
          <h1 className="px-2 py-3 font-bold w-28">Price</h1>
          <h1 className="px-2 py-3 font-bold w-28">Quantity </h1>
          <h1 className="px-2 py-3 font-bold w-28">Subtotal</h1>
        </div>
        {cart.length !== 0 ? (
          cart.map((p) => {
            return (
              <CartItems
                thumbnail={p.product.thumbnail}
                title={p.product.title}
                price={p.product.price}
                value={quantityMap[p.product.id]}
                key={p.product.id}
                id={p.product.id}
                handlechange={handlechange}
                handleRemove={handleRemove}
              />
            );
          })
        ) : (
          <h1>khali hi tera cart</h1>
        )}
        <button
          onClick={handleupdateclick}
          className="px-4 py-2 text-white rounded-md bg-primary"
        >
          update cart
        </button>
      </div>
    </>
  );
};

export default withCart(Cartlist);
