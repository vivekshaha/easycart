import React, { useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const CartItems = ({
  thumbnail,
  title,
  price,
  value,
  id,
  cart,
  updatecart,
  localcart,
  setLocalcart,
}) => {
  function handleRemove(event) {
    const id = +event.currentTarget.getAttribute("productid");
    const newCart = { ...cart };
    delete newCart[id];
    updatecart(newCart);
  }
  // useEffect(() => {
  //   setLocalcart(cart);
  // }, [cart]);
  function handlechange(event) {
    const pid = event.target.getAttribute("productid");
    const newvalue = +event.target.value;
    console.log(pid, newvalue);
    const newlocalcart = { ...localcart, [pid]: newvalue };
    setLocalcart(newlocalcart);
  }
  return (
    <div className="flex items-center justify-center border-b border-x border-primary">
      <button productid={id} onClick={handleRemove}>
        <AiTwotoneDelete className="w-20 text-2xl text-primary" />
      </button>
      <div className="w-32 p-2">
        <img src={thumbnail} className="w-16 h-16" />
      </div>
      <h1 className="font-bold w-96">{title}</h1>
      <h1 className="font-bold w-28">{price}</h1>
      <input
        type="number"
        productid={id}
        onChange={handlechange}
        className="w-16 font-bold mr-9"
        value={value}
      />
      <h1 className="w-32 font-bold">{value * price}</h1>
    </div>
  );
};

export default CartItems;
