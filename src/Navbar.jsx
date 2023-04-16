import React from "react";

const Navbar = ({ total }) => {
  return (
    <div className="flex justify-between px-16">
      <h1 className="text-3xl">EasyCart</h1>
      <div>{total}||CartIcon</div>
    </div>
  );
};

export default Navbar;
