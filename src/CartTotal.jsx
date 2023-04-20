import React from "react";

const CartTotal = () => {
  return (
    <div className="w-1/2 mt-4 border border-primary">
      <h1 className="p-4 text-2xl font-bold">Cart Total</h1>
      <div className="flex pl-8 border-y border-primary ">
        {" "}
        <h2 className="py-6 font-bold">Subtoatl</h2>{" "}
        <span className="py-6 pl-16 font-bold ">amount</span>
      </div>
      <div className="flex pl-8 border-b border-primary">
        <h2 className="py-3 font-bold">subtoatl</h2>{" "}
        <span className="py-3 pl-16 font-bold ">amount</span>
      </div>
      <div className="flex items-center justify-center ">
        <button className="px-6 py-3 m-4 text-xl text-white rounded-md w-72 bg-primary">
          {" "}
          Procedd to chekout
        </button>
      </div>{" "}
    </div>
  );
};

export default CartTotal;
