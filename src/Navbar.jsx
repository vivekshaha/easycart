import React from "react";
import logo from "./logo.svg";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ total }) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 mx-3 bg-white grow-0">
      <Link to="/">
        <img src={logo} className="w-40 h-11" />
      </Link>
      <BsBag className="cursor-pointer h-7 w-7 text-primary " />
      <span className="absolute right-9 top-7 text-primary">{total}</span>
    </div>
  );
};

export default Navbar;
