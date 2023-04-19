import React, { memo } from "react";

const Footer = () => {
  // console.log("footer is rerunning");
  return (
    <div className="flex-0">
      <div className="flex justify-between py-9 px-9 bg-gray-dark ">
        <h1 className="text-sm text-white">Copyright &copy; 2023 | CodeYogi</h1>
        <h1 className="text-sm text-white">Powered By CodeYogi </h1>
      </div>
    </div>
  );
};

export default memo(Footer);
