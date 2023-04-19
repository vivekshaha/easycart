import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgetPass = () => {
  function senddata() {
    console.log("sending dat", values.email);
  }

  const schema = Yup.object({
    email: Yup.string().required().email(),
  });
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: schema,
      onSubmit: senddata,
    });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center p-16 rounded-md bg-gray-light"
      >
        <label htmlFor="email " className="sr-only">
          Enter you Email
        </label>
        <input
          onChange={handleChange}
          name="email"
          onBlur={handleBlur}
          type="text"
          placeholder=" Enter Your Email"
          className="h-10 text-center border border-black rounded-md w-72 focus:outline-none"
        />
        {touched.email && errors.email ? (
          <div className="text-primary">{errors.email}</div>
        ) : null}
        <button
          className="px-8 py-3 mt-8 bg-black rounded-md text-md text-primary"
          type="submit"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
