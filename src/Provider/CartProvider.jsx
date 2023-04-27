import React, { useEffect, useState } from "react";
import { CartContext } from "../Context";
import { withUser } from "../withProvider";
import { getCart, getProductbyId, saveCart } from "../https";

const CartProvider = ({ isLoggedIn, children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      getCart().then((savedCart) => setCart(savedCart));
    } else {
      const localcart = localStorage.getItem("cart");
      const savedData = JSON.parse(localcart) || {};
      quantityMapToCart(savedData);
    }
  }, [isLoggedIn]);
  function quantityMapToCart(quantityMap) {
    getProductbyId(Object.keys(quantityMap)).then((products) => {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      console.log(savedCart);
      setCart(savedCart);
    });
  }

  // Adding cart  detail in id and no format
  const addToCart = (ProductId, count) => {
    const quantityMap = cart.reduce(
      (m, p) => ({ ...m, [p.product.id]: p.quantity }),
      {}
    );
    console.log(quantityMap);
    const oldCount = quantityMap[ProductId] || 0;
    const newCart = { ...quantityMap, [ProductId]: oldCount + +count };
    updatecart(newCart);
  };

  function updatecart(newCart) {
    if (isLoggedIn) {
      saveCart(newCart).then((response) => {
        //to do from local cart
        // setCart(response)
        quantityMapToCart(newCart);
      });
    } else {
      const savelocal = JSON.stringify(newCart);
      localStorage.setItem("cart", savelocal);
      //save on server suing api
      quantityMapToCart(newCart);
    }
  }
  // console.log("app is called");
  // Reading Total count
  const totalCount = cart.reduce((sum, current) => {
    return sum + current.quantity;
  }, 0);

  // if (userloading) {
  //   <Loading />;
  // }
  return (
    <CartContext.Provider value={{ totalCount, cart, updatecart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default withUser(CartProvider);
