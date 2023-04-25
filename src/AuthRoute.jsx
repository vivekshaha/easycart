import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import withUser from "./withUser";

const AuthRoute = ({ user, children }) => {
  // const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/dash" />;
  }
  return children;
};

export default withUser(AuthRoute);
