import React, { useEffect, useState } from "react";
import { UserContext } from "../Context";
import { getuser } from "../https";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      getuser(token)
        .then((response) => {
          setUser(response.data);
          setUserloading(false);
        })
        .catch(() => {
          // localStorage.removeItem("token");
        });
    }
    // else {
    //   setUserloading(false);
    // }
  }, []);
  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
