import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";
import withAlert from "./removedcom/withAlert";
import { useEffect } from "react";
const themeMap = {
  sucess: {
    Icon: GrStatusGood,
    color: "bg-green-700",
  },
  error: {
    Icon: RiErrorWarningFill,
    color: "bg-red-500",
  },
};

const Alert = ({ alert, removeAlert }) => {
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3 * 1000);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [alert]);
  if (!alert) {
    return;
  }
  const { message, type } = alert;
  const { Icon, color } = themeMap[type];
  return (
    <div className="flex items-center justify-center px-4">
      <div
        role="alert"
        id="alert"
        className={
          "flex flex-col items-center justify-between w-full py-4 mx-auto transition duration-150 ease-in-out rounded shadow lg:w-11/12  md:py-0 md:flex-row " +
          color
        }
      >
        <div className="flex flex-col items-center md:flex-row">
          <div className="p-4 mr-3 text-white bg-yellow-400 rounded md:rounded-tr-none md:rounded-br-none">
            <Icon />
          </div>
          <p className="mt-2 mr-2 text-base font-bold text-gray-800 dark:text-gray-100 md:my-0">
            {type}
          </p>
          <div className="hidden w-1 h-1 mr-2 bg-gray-300 rounded-full dark:bg-gray-700 xl:block"></div>
          <p className="mb-2 text-sm text-center text-white lg:text-base lg:pt-1 xl:pt-0 sm:mb-0 sm:text-left">
            {message}
          </p>
        </div>
        <div className="flex justify-center pr-4 xl:items-center lg:items-center sm:justify-end">
          <button
            onClick={removeAlert}
            className="text-sm text-gray-600 cursor-pointer focus:outline-none focus:text-gray-400 hover:text-gray-400 dark:text-gray-400"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAlert(Alert);
