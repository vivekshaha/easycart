import React, { memo } from "react";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center grow">
      <ImSpinner9 className="text-6xl animate-spin text-primary" />
    </div>
  );
};

export default memo(Loading);
