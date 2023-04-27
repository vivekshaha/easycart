import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context";

const withUser = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const ContextData = useContext(UserContext);
    // console.log(props);
    return <IncomingComponent {...props} {...ContextData} />;
  };
  return OutgoingComponent;
};

export default withUser;
