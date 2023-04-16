import React from "react";

const TableRow = ({ index, number }) => {
  return (
    <div>
      {index}*{number}={index * number}
    </div>
  );
};

export default TableRow;
