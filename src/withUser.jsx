import React from "react";
import { useContext } from "react";
import { UserContext } from "./App";

const withUser = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const { user, setUser } = useContext(UserContext);
    // console.log(props);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
  };
  return OutgoingComponent;
};

export default withUser;
