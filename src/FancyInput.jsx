import React from "react";
import FormikHOC from "./FormikHOC";

const FancyInput = ({ name, label, touched, className, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}{" "}
      </label>
      <input
        {...rest}
        name={name}
        className={
          "h-10 text-center focus:ring-primary border-6  placeholder:text-primary  w-72 bg-primary  focus:outline-none  " +
          className
        }
      />
      {touched && error ? <div>{error}</div> : null}
    </div>
  );
};
export const FancyFormikInput = FormikHOC(FancyInput);
export default FancyInput;
