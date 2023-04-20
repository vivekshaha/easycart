import { useField } from "formik";
import React from "react";
import Input from "./Input";
import FancyInput from "./FancyInput";

const FancyFormikInput = ({ name, label, ...rest }) => {
  const [data, meta] = useField(name);
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}{" "}
      </label>
      <FancyInput
        {...rest}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        touched={touched}
        value={value}
      />
    </div>
  );
};

export default FancyFormikInput;
