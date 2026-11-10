import "./App.css";
import { DummyAPI } from "./playground/DummyAPI";
import { LocalEffect } from "./playground/LocalEffect";
import { Timer } from "./playground/Timer";
// import { Counter } from "./playground/Counter";
// import { NameBox } from "./playground/NameBox";
// import { Roaster } from "./playground/Roaster";

function App() {
  return (
    <div>
      {/* <Roaster /> */}
      <Timer />
      <LocalEffect />
      <DummyAPI />
    </div>
  );
}

export default App;
