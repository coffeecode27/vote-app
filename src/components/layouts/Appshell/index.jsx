import React from "react";
import BarChart from "../Barchart";
import Navbar from "../Navbar.jsx/index.jsx";
const Appshell = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar />
      <div className="items-center">
        <BarChart />
      </div>
      {children}
    </div>
  );
};

export default Appshell;
