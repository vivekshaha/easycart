import React, { useState } from "react";
import { AlertContext } from "../Context";

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(undefined);

  const removeAlert = () => {
    setAlert(undefined);
  };
  return (
    <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
