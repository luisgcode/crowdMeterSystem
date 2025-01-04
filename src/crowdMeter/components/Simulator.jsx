import React from "react";
import "./Simulator.css";

const Simulator = () => {
  return (
    <div className="text-center">
      <span className="text-sm text-yellow-300">* API data emulator</span>
      <div className="dashboard flex align-center justify-center gap-10 mt-5">
        <div className="dashboard-block">
          <select
            className="rounded-lg bg-gray-800 p-4"
            name=""
            id="select_day"
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>
        <div className="dashboard-block">
          <input
            className="p-4 rounded-lg bg-gray-800 min-w-[340px]"
            type="number"
            name="people"
            id="people"
            placeholder="Insert number of people here from 0 to 100"
          />
        </div>
        <div className="dashboard-block">
          <button className="p-4 rounded-lg bg-gray-800">Insert data</button>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
