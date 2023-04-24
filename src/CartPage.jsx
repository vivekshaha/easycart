import React, { useEffect, useState } from "react";
import CartTotal from "./CartTotal";
import { getProductDetail } from "./https";
import Loading from "./Loading";
import Cartlist from "./Cartlist";

const CartPage = ({ cart, updatecart }) => {
  const [localcart, setLocalcart] = useState([]);
  const [cartitems, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  function handleRemove(pid) {
    // const id = +event.currentTarget.getAttribute("productid");

    const newCart = { ...cart };
    delete newCart[pid];
    updatecart(newCart);
  }
  useEffect(() => {
    setLoading(true);
    const promises = Object.keys(cart).map((a) => {
      return getProductDetail(a);
    });
    Promise.all(promises).then((products) => {
      setCart(products);
      setLoading(false);
    });
  }, [cart]);

  useEffect(() => {
    setLocalcart(cart);
  }, [cart]);

  if (loading) {
    return <Loading />;
  }
  function localupdatcart() {
    updatecart(localcart);
  }

  return (
    <>
      <div className="px-24 py-20 my-16 text-black bg-white">
        <div>
          <Cartlist
            cartitems={cartitems}
            localcart={localcart}
            setLocalcart={setLocalcart}
            handleRemove={handleRemove}
          />
          (
          <button
            onClick={localupdatcart}
            className="px-4 py-2 text-white rounded-md bg-primary"
          >
            update cart
          </button>
          )
        </div>
        <div className="flex justify-end">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default CartPage;
