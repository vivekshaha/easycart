// import { Form, Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import { withFormik } from "formik";
// import { FormikInput } from "./Input";

const schema = Yup.object({
  email: Yup.string().email().required(),
  mpassword: Yup.string().min(6).required(),
});
function sendingData(values) {
  console.log("hello formik forms", values.email, values.mpassword);
}

const initialValues = {
  email: "",
  mpassword: "",
};
export const Login = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  console.log("vlaues in proes", values, errors);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-dark ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-16 rounded-md bg-gray-light"
        >
          <h1 className="p-5 text-3xl text-center">Login EasyCart</h1>
          <Input
            onBlur={handleBlur}
            touched={touched.email}
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            id="name"
            label="Enter You Email"
            type="text"
            name="email"
            className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
            placeholder="enter you email"
          />

          <Input
            id="mpassword"
            onBlur={handleBlur}
            touched={touched.mpassword}
            value={values.mpassword}
            error={errors.mpassword}
            onChange={handleChange}
            label="My password"
            type="password"
            name="mpassword"
            className="h-10 text-center border border-black w-72 rounded-b-md focus:outline-none"
            placeholder="Enter you passwords"
          />

          <button type="submit">Log In</button>
          <h1>
            Don't have an Account{" "}
            <Link className="text-xl font-bold text-primary" to="/signup">
              Sign UP
            </Link>
          </h1>
          <h1>
            Forgetton password
            <Link className="text-xl font-bold text-primary" to="/forgetpass">
              click here
            </Link>
          </h1>
        </form>
      </div>
      ;
    </>
  );
};
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  onSubmit: sendingData,
});
const EasyLogin = myHOC(Login);
export default EasyLogin;
