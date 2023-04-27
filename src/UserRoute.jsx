import React from "react";
// import { createContext } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { UserContext } from "./App";
import { withUser } from "./withProvider";

const UserRoute = ({ user, children }) => {
  // const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default withUser(UserRoute);
