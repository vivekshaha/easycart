// import { Form, Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import { withFormik } from "formik";
import { postlogin } from "./https";
import { withUser } from "./withProvider";
import { withAlert } from "./withProvider";
// import { FormikInput } from "./Input";

const schema = Yup.object({
  email: Yup.string().email().required(),
  mpassword: Yup.string()
    .min(3, "password should greater than 6 char")
    .required(),
});
function sendingData(values, bag) {
  // console.log("hello formik forms", values.email, values.mpassword);
  // console.log();
  postlogin(values.email, values.mpassword)
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      const data1 = {
        type: "sucess",
        message: "your data is coredts",
      };
      bag.props.setAlert(data1);
      // console.log(token, user);
      // console.log(JSON.stringify(data));
      // console.log("Data", data);
    })
    .catch(() => {
      const data = {
        type: "error",
        message: "invalid creds",
      };
      bag.props.setAlert(data);
      console.log("data not found");
    });
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

          <button type="submit">submit</button>
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
  handleSubmit: sendingData,
});
const EasyLogin = myHOC(Login);
export default withAlert(withUser(EasyLogin));
