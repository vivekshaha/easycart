import React, { useState } from "react";
import logo from "./logo.svg";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ total }) => {
  const [bar, setBar] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-4 mx-3 bg-white grow-0">
      <Link to="/">
        <img src={logo} className="w-40 h-11" />
      </Link>
      <div className="flex ">
        {bar && <div>Hamburger Icon is on</div>}
        <div>
          <Link to="/login">Login</Link>
          {/* <CiMenuBurger
            className="text-xl cursor-pointer "
            onClick={() => {
              setBar(!bar);
            }}
          /> */}
        </div>
        <div>
          <Link to="/cart">
            <BsBag className="cursor-pointer h-7 w-7 text-primary " />
            <span className="absolute right-9 top-7 text-primary">{total}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
