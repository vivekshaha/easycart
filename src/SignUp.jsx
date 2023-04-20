import React from "react";
import { Form, Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

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

  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  return (
    <>
      <div>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={sign}
        >
          <Form className="flex flex-col items-center justify-center p-16 rounded-md bg-gray-light">
            <Input
              type="text"
              className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
              name="fullname"
              placeholder="Full Name"
            />
            <Input
              type="email"
              name="email"
              className="h-10 text-center border border-black w-72 focus:outline-none"
              placeholder="Email"
            />
            <Input
              type="password"
              name="password"
              className="h-10 text-center border border-black w-72 rounded-b-md focus:outline-none"
              placeholder="Password"
            />
            <button
              className="px-8 py-3 bg-black rounded-md text-md text-primary"
              type="submit"
            >
              Create Account
            </button>
            {/* <button onClick={et}>Reset Form</button> */}
            <h1>
              Already have an Account
              <Link className="text-xl font-bold text-primary" to="/login">
                Login{" "}
              </Link>
            </h1>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
