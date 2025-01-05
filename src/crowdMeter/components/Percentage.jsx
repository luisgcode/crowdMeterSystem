// src/components/Percentage.jsx
import React from "react";

const Percentage = ({ height }) => {
  return (
    <span
      className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
      style={{ height: `${height}%` }}
    ></span>
  );
};

export default Percentage;
