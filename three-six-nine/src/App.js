import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  const handleStart = () => {};

  const handleChange = () => {};

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <button className="start-button" onClick={handleStart}>
        게임시작
      </button>
      <div className="player-container"></div>
    </div>
  );
}

export default App;
