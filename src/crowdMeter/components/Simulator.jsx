// filepath: /C:/Users/luisg/OneDrive/Escritorio/programming 2025/crowd_meter_system/src/crowdMeter/components/Simulator.jsx
import React, { useState } from "react";
import "./Simulator.css";

const Simulator = ({ onUpdate }) => {
  const [selectedDay, setSelectedDay] = useState("monday");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleInsertData = () => {
    onUpdate(selectedDay);
  };

  return (
    <div className="text-center">
      <span className=" text-yellow-300">* API data emulator</span>
      <div className="dashboard flex align-center justify-center gap-10 mt-5">
        <div className="dashboard-block">
          <select
            className="rounded-lg bg-gray-800 p-4"
            name="select_day"
            id="select_day"
            value={selectedDay}
            onChange={handleDayChange}
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
          <button
            className="p-4 rounded-lg border-2 border-yellow-200 text-yellow-200"
            onClick={handleInsertData}
          >
            Generate Random Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
