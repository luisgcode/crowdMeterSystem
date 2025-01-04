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
            <h2 className="font-bold uppercase border-2 border-white">hours</h2>
          </div>
          <div className="crowd w-[700px]">
            <h2 className="font-bold uppercase border-2 border-white">
              daily crowd
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdmeter;
