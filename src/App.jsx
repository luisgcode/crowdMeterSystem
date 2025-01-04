import { useState } from "react";
import "./App.css";

// Elements
import Crowdmeter from "./crowdMeter/Crowdmeter";
import Simulator from "./crowdMeter/components/Simulator";

function App() {
  return (
    <>
      <div className="App mx-auto w-screen flex  flex-col gap-20">
        <Crowdmeter />
        <hr />
        <Simulator />
      </div>
    </>
  );
}

export default App;
