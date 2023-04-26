import React from "react";
import { useContext } from "react";
import { AlertContext, UserContext } from "./Context";
const withProvider = (provider) => {
  const myHoc = (IncomingComponent) => {
    const OutgoingComponent = (props) => {
      const ContextData = useContext(provider);
      // console.log(props);
      return <IncomingComponent {...props} {...ContextData} />;
    };
    return OutgoingComponent;
  };
  return myHoc;
};
export default withProvider;
export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
