// filepath: /c:/Users/luisg/OneDrive/Escritorio/programming 2025/crowd_meter_system/src/App.jsx
import { useState } from "react";
import "./App.css";

// Elements
import Crowdmeter from "./crowdMeter/Crowdmeter";
import Simulator from "./crowdMeter/components/Simulator";
import Percentagedaily from "./crowdMeter/data/Percentagedaily";

function App() {
  const [percentages, setPercentages] = useState(Percentagedaily);

  // Función para generar valores aleatorios
  const generateRandomData = (day) => {
    return percentages[day].map((item) => ({
      ...item,
      ocu_percen: Math.floor(Math.random() * 101), // Genera un valor aleatorio entre 0 y 100
    }));
  };

  // Función para actualizar los datos
  const handleUpdate = (day) => {
    setPercentages((prevPercentages) => ({
      ...prevPercentages,
      [day]: generateRandomData(day),
    }));
  };

  return (
    <div className="App mx-auto w-screen flex flex-col gap-20">
      <Crowdmeter percentages={percentages} onUpdate={handleUpdate} />
      <hr />
      <Simulator onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
