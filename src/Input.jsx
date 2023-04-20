import { useField } from "formik";
import React from "react";

const Input = ({ name, label, ...rest }) => {
  const [data, meta] = useField(name);
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}{" "}
      </label>
      <input
        {...rest}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {touched && error ? <div>{error}</div> : null}
    </div>
  );
};

export default Input;
