import React from "react";
// import FormikHOC from "./FormikHOC";

const Input = ({ name, label, touched, className, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}{" "}
      </label>
      <input
        {...rest}
        name={name}
        className={
          "h-10 text-center border border-black w-72   focus:outline-none " +
          className
        }
      />
      {touched && error ? <div>{error}</div> : null}
    </div>
  );
};
export default Input;
