import React from "react";

const Dashboard = ({ user, setUser }) => {
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

export default Dashboard;
