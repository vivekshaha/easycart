import React, { useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const [num, setNum] = useState(2);

  const updatenum = () => {
    setNum(num + 1);
  };
  return (
    <>
      <button onClick={updatenum}>Nexttable</button>
      <div>
        <TableRow index={1} number={num} />
        <TableRow index={2} number={num} />
        <TableRow index={3} number={num} />
        <TableRow index={4} number={num} />
        <TableRow index={5} number={num} />
        <TableRow index={6} number={num} />
        <TableRow index={7} number={num} />
        <TableRow index={8} number={num} />
        <TableRow index={9} number={num} />
        <TableRow index={10} number={num} />
      </div>
    </>
  );
};

export default Table;
