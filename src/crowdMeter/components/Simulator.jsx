import React from "react";
import "./Simulator.css";

const Simulator = () => {
  return (
    <div className="flex justify-center flex-col items-center  ">
      <div className="row">
        <select name="" id="select_day">
          <option value="Monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="Monday">Wednesday</option>
          <option value="Monday">Monday</option>
          <option value="Monday">Monday</option>
          <option value="Monday">Monday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      <span className="text-yellow-300 text-sm tracking-widest text-left block mt-5">
        * Insert data to emulate API.
      </span>
    </div>
  );
};

export default Simulator;
