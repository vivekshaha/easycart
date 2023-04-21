import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { getProductDetail } from "./https";
import Loading from "./Loading";

const Cart = ({ cart, updatecart }) => {
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
                  cart={cart}
                  updatecart={updatecart}
                  localcart={localcart}
                  setLocalcart={setLocalcart}
                />
              );
            })
          ) : (
            <h1>khali hi tera cart</h1>
          )}

          {cartitems.length !== 0 && (
            <button
              onClick={localupdatcart}
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              update cart
            </button>
          )}
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
