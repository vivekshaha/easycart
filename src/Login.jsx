import { Form, Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import { FormikInput } from "./Input";
import FancyInput from "./FancyInput";
import { FancyFormikInput } from "./FancyInput";

const Login = () => {
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

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-dark ">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={sendingData}
          validateOnMount
        >
          <Form className="flex flex-col p-16 rounded-md bg-gray-light">
            <h1 className="p-5 text-3xl text-center">Login EasyCart</h1>
            <FormikInput
              label="Enter You Email"
              type="text"
              name="email"
              className="h-10 text-center border border-black w-72 rounded-t-md focus:outline-none"
              placeholder="enter you email"
            />

            <FormikInput
              label="My password"
              type="password"
              name="mpassword"
              className="h-10 text-center border border-black w-72 rounded-b-md focus:outline-none"
              placeholder="Enter you passwords"
            />

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
          </Form>
        </Formik>
      </div>
      ;
    </>
  );
};

export default Login;
