import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h1 className="text-3xl text-red-300">Starting Crowd meter project</h1>
      </div>
    </>
  );
}

export default App;
