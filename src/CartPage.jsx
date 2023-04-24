import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { getProductDetail } from "./https";
import Loading from "./Loading";
import Cartlist from "./Cartlist";

const CartPage = ({ cart, updatecart }) => {
  const [localcart, setLocalcart] = useState([]);
  const [cartitems, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
            updatecart={updatecart}
            localupdatcart={localupdatcart}
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
