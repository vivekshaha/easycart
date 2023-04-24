import React from "react";
import { Form, Formik, useFormik, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormikInput } from "./Input";
import Input from "./Input";

const schema = Yup.object({
  fullname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email to bhar le yaar"),
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
const SignUp = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  console.log(values);
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-16 rounded-md bg-gray-light"
        >
          <Input
            onBlur={handleBlur}
            touched={touched.fullname}
            value={values.fullname}
            error={errors.fullname}
            onChange={handleChange}
            type="text"
            className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
            name="fullname"
            placeholder="Full Name"
          />
          <Input
            onBlur={handleBlur}
            touched={touched.email}
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="h-10 text-center border border-black w-72 focus:outline-none"
            placeholder="Email"
          />
          <Input
            onBlur={handleBlur}
            touched={touched.password}
            value={values.password}
            error={errors.password}
            onChange={handleChange}
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
        </form>
      </div>
    </>
  );
};
const myHOC = withFormik({
  validationSchema: schema,
  handleSubmit: sign,
  initialValues: initialValues,
});
const easysignup = myHOC(SignUp);
export default easysignup;
