import React from "react";
// import { useContext } from "react";
// import { UserContext } from "./App";
import { withUser } from "./withProvider";

const Dashboard = ({ user, setUser }) => {
  // const { user, setUser } = useContext(UserContext);

  const userlogout = () => {
    setUser(undefined);
    localStorage.removeItem("token");
  };
  return (
    <>
      <div>Dashboard Hello,{user.full_name} Welcom to Easycart</div>{" "}
      <button onClick={userlogout}>logout</button>
    </>
  );
};

export default withUser(Dashboard);
