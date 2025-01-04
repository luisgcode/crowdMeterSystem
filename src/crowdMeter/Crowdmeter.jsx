import React from "react";
import "./Crowdmeter";

const Crowdmeter = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-[1000px] text-center   ">
        <div className="schedule-header mb-20">
          <h1 className="text-titleColor uppercase font-bold">
            Schedules & hours
          </h1>
          <p>Check hours and days to find the best moment for you!</p>
        </div>
        <div className="schedule-content flex gap-10  ">
          <div className="hours w-[300px]">
            <h2 className="font-bold uppercase mb-10">hours</h2>
            <div className="hours-block flex flex-col gap-1 text-left  ">
              <span>Monday: 5:00 AM - 12:00 AM</span>
              <span>Tuesday: 24 HRS</span>
              <span>Wednesday: 24 HRS</span>
              <span>Thursday: 5:00 AM - 12:00 AM</span>
              <span>Friday: 7:00 AM - 09:00 PM</span>
              <span>Saturday: 5:00 AM - 12:00</span>
              <span>Sunday: 5:00 AM - 12:00</span>
            </div>
          </div>
          <div className="crowd w-[700px]">
            <h2 className="font-bold uppercase mb-10">daily crowd</h2>
            <div className="crowd-block  "></div>
            <span className="text-yellow-300 text-sm tracking-widest ">
              * Info Collected from the last 30 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdmeter;
