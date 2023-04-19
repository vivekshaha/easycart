import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const schema = Yup.object({
    email: Yup.string().email().required(),
    mpassword: Yup.string().min(6).required(),
  });
  function sendingData(values) {
    console.log("hello formik forms", values.email, values.mpassword);
  }
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        mpassword: "",
      },
      validationSchema: schema,
      onSubmit: sendingData,
    });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-dark ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-16 rounded-md bg-gray-light"
        >
          <h1 className="p-5 text-3xl text-center">Login EasyCart</h1>
          <label htmlFor="email " className="sr-only">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            type="text"
            name="email"
            className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
            placeholder="enter you email"
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}
          <label htmlFor="mpassword " className="sr-only">
            Password
          </label>
          <input
            value={values.mpassword}
            onChange={handleChange}
            type="password"
            name="mpassword"
            onBlur={handleBlur}
            className="h-10 text-center border border-black w-72 rounded-b-md focus:outline-none"
            placeholder="Enter you passwords"
          />
          {touched.mpassword && errors.mpassword ? (
            <div>{errors.mpassword}</div>
          ) : null}
          <button type="submit"> Log In</button>
          <h1>
            Don't have an Account{" "}
            <Link className="text-xl font-bold text-primary" to="/signup">
              Sign UP
            </Link>
          </h1>
          <h1>
            Forgetton password
            <Link className="text-xl font-bold text-primary" to="/forgetpass">
              click here{" "}
            </Link>
          </h1>
        </form>
      </div>
      ;
    </>
  );
};

export default Login;
