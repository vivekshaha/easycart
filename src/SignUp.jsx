import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
  const schema = Yup.object({
    fullname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  function sign(values) {
    console.log(
      "calling of avlaues",
      values.email,
      values.password,
      values.fullname
    );
  }
  const {
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: sign,
  });

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-16 rounded-md bg-gray-light"
        >
          <label htmlFor="fullname" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
            name="fullname"
            value={values.fullname}
            placeholder="Full Name"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.fullname && errors.fullname ? (
            <div>{errors.fullname}</div>
          ) : null}{" "}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            onBlur={handleBlur}
            name="email"
            className="h-10 text-center border border-black w-72 focus:outline-none"
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}{" "}
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            onBlur={handleBlur}
            type="password"
            name="password"
            className="h-10 text-center border border-black w-72 rounded-b-md focus:outline-none"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {touched.password && errors.password ? (
            <div>{errors.password}</div>
          ) : null}{" "}
          <button
            className="px-8 py-3 bg-black rounded-md text-md text-primary"
            type="submit"
          >
            Create Account
          </button>
          <button onClick={handleReset}>Reset Form</button>
          <h1>
            Already have an Account
            <Link className="text-xl font-bold text-primary" to="/login">
              Login{" "}
            </Link>
          </h1>
        </form>
      </div>
    </>
  );
};

export default SignUp;
