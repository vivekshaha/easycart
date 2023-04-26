import React from "react";
import { useContext } from "react";
import { AlertContext } from "./Context";

const withAlert = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const ContextData = useContext(AlertContext);
    // console.log(props);
    return <IncomingComponent {...props} {...ContextData} />;
  };
  return OutgoingComponent;
};

export default withAlert;
