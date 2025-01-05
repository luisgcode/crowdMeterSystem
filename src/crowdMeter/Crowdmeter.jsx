import React from "react";
import "./Crowdmeter.css";
import Hours from "./components/Hours";
import Schedulehours from "./data/Schedulehours";
7;
const Crowdmeter = () => {
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
                <span className="day-tab">MON</span>
                <span className="day-tab">TUE</span>
                <span className="day-tab">WED</span>
                <span className="day-tab">THU</span>
                <span className="day-tab">FRI</span>
                <span className="day-tab">SAT</span>
                <span className="day-tab">SUN</span>
              </div>
              <div className="crowd-block-medium h-60 pt-5 pb-2 border-b-2 border-dashed border-titleColor flex justify-around items-end">
                Bars will be data provided by a json data file
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "60%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "35%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "30%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "40%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "50%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "90%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "80%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "30%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "80%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "70%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "30%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "80%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "70%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "10%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "20%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "20%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "10%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
                <span
                  className="bar-tab bg-gradient-to-t from-white to-titleColor w-8 rounded-t-lg rounded-b-md"
                  style={{
                    height: "20%", // Establece la altura que deseas
                    transformOrigin: "bottom", // Cambia el punto de origen a la parte inferior
                  }}
                ></span>
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
