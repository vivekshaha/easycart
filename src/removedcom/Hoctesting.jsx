// import React from "react";
// import { Form, Formik, useFormik } from "formik";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import Input from "./Input";
// import { FormikInput } from "./Input";
// import FancyInput from "./FancyInput";
// import { FancyFormikInput } from "./FancyInput";

// const Hoctesting = () => {
//   const schema = Yup.object({
//     fullname: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//     password: Yup.string()
//       .min(8, "Must be 8 characters or more")
//       .required("Required"),
//     email: Yup.string().email("Invalid email address").required("Required"),
//   });
//   function sign(values) {
//     console.log(
//       "calling of avlaues",
//       values.email,
//       values.password,
//       values.fullname
//     );
//   }

//   const initialValues = {
//     fullname: "",
//     email: "",
//     password: "",
//   };
//   return (
//     <>
//       <div>
//         <Input
//           type="text"
//           name="search"
//           placeholder="Enter you sech herer"
//           className="border focus:outline-none "
//         />
//         <FancyInput
//           type="text"
//           name="search"
//           placeholder="this is placehoder"
//         />
//         <Formik
//           validationSchema={schema}
//           initialValues={initialValues}
//           onSubmit={sign}
//         >
//           <Form className="flex flex-col items-center justify-center p-16 rounded-md bg-gray-light">
//             <FormikInput
//               type="text"
//               className="rounded-t-md "
//               name="fullname"
//               placeholder="Full Name"
//             />
//             <FormikInput
//               type="email"
//               name="email"
//               className=""
//               placeholder="Email"
//             />
//             <FormikInput
//               type="password"
//               name="password"
//               className="rounded-b-md "
//               placeholder="Password"
//             />
//             <button
//               className="px-8 py-3 bg-black rounded-md text-md text-primary"
//               type="submit"
//             >
//               Create Account
//             </button>
//             {/* <button onClick={et}>Reset Form</button> */}
//             <h1>
//               Already have an Account
//               <Link className="text-xl font-bold text-primary" to="/login">
//                 Login{" "}
//               </Link>
//             </h1>
//           </Form>
//         </Formik>
//       </div>
//     </>
//   );
// };

// export default Hoctesting;
