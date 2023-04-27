import React, { useEffect, useState } from "react";
import { UserContext } from "../Context";
import { getuser } from "../https";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const token = localStorage.getItem("token");
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
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
