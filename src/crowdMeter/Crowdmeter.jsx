// filepath: /C:/Users/luisg/OneDrive/Escritorio/programming 2025/crowd_meter_system/src/crowdMeter/Crowdmeter.jsx
import React, { useState } from "react";
import "./Crowdmeter.css";
import Hours from "./components/Hours";
import Schedulehours from "./data/Schedulehours";

const Crowdmeter = ({ percentages, onUpdate }) => {
  // Estado para almacenar el día seleccionado
  const [selectedDay, setSelectedDay] = useState("monday");

  // Función para manejar el clic en un día
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Obtenemos los datos del día seleccionado
  const percentageBars = percentages[selectedDay].map((item, index) => (
    <span
      key={index}
      className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
      style={{
        height: `${item.ocu_percen}%`,
      }}
    ></span>
  ));

  // Hours from data hours
  const hours = Schedulehours.map((item) => (
    <Hours key={item.day} day={item.day} hours={item.hours} />
  ));

  return (
    <div className="flex justify-center items-center  w-full overflow-hidden">
      <div className="max-w-[1000px] text-center">
        <div className="schedule-header mb-20">
          <h1 className="text-titleColor uppercase font-bold">
            Schedules & hours
          </h1>
          <p>Check hours and days to find the best moment for you!</p>
        </div>
        <div className="schedule-content flex gap-28">
          <div className="hours">
            <h2 className="font-bold uppercase mb-10">hours</h2>
            <div className="hours-block flex flex-col gap-2 text-left">
              {/* Printing hours from data */}
              {hours}
            </div>
          </div>
          <div className="crowd w-[700px]">
            <h2 className="font-bold uppercase mb-10">daily crowd</h2>
            <div className="crowd-block">
              <div className="crowd-block-top w-full flex justify-around border-b-2 border-titleColor pb-3">
                {[
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ].map((day) => (
                  <span
                    key={day}
                    className={`day-tab ${
                      selectedDay === day ? "day-active" : ""
                    }`}
                    onClick={() => handleDayClick(day)}
                  >
                    {day.toUpperCase().slice(0, 3)}
                  </span>
                ))}
              </div>
              <div className="crowd-block-medium h-60 pt-5 pb-2 border-b-2 border-dashed border-titleColor flex justify-around items-end">
                {percentageBars}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdmeter;
