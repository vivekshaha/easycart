import { useField } from "formik";
import React from "react";

const FormikHOC = (IncomingComponent) => {
  const OutgoingComponent = ({ label, name, ...rest }) => {
    const [data, meta] = useField(name);
    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;
    return (
      <div>
        <label htmlFor={label} className="sr-only">
          {label}{" "}
        </label>
        <IncomingComponent
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
  return OutgoingComponent;
};
export default FormikHOC;
