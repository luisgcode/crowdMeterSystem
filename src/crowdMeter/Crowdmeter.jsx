import React, { useState } from "react";
import "./Crowdmeter.css";
import Hours from "./components/Hours";
import Schedulehours from "./data/Schedulehours";
import Percentage from "./components/Percentage";
import Percentagedaily from "./data/Percentagedaily";

const Crowdmeter = () => {
  // Estado para almacenar el día seleccionado
  const [selectedDay, setSelectedDay] = useState("monday");

  // Función para manejar el clic en un día
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Obtenemos los datos del día seleccionado
  const percentages = Percentagedaily[selectedDay].map((item, index) => (
    <Percentage key={index} hour={item.hour} height={item.ocu_percen} />
  ));

  // Hours from data hours
  const hours = Schedulehours.map(function (item) {
    return <Hours day={item.day} hours={item.hours} />;
  });

  return (
    <div className="flex justify-center items-center   ">
      <div className="max-w-[1000px] text-center   ">
        <div className="schedule-header mb-20">
          <h1 className="text-titleColor uppercase font-bold">
            Schedules & hours
          </h1>
          <p>Check hours and days to find the best moment for you!</p>
        </div>
        <div className="schedule-content flex gap-28 ">
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
                {/* percentages daily from data */}
                {percentages}
              </div>
              <div className="crowd-block-bottom w-full flex justify-around">
                <span className="hour-tab">6AM</span>
                <span className="hour-tab">9AM</span>
                <span className="hour-tab">12PM</span>
                <span className="hour-tab">3PM</span>
                <span className="hour-tab">6PM</span>
                <span className="hour-tab">9PM</span>
                <span className="hour-tab">12AM</span>
                <span className="hour-tab">3AM</span>
              </div>
            </div>
            <span className="text-yellow-300 text-sm tracking-widest text-left block mt-5">
              * Info Collected from the last 30 days, based in our maximum
              capacity.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdmeter;
