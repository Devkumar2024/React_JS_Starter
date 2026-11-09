import "./App.css";
import { DummyAPI } from "./playground/DummyAPI";
import { Timer } from "./playground/Timer";
// import { Counter } from "./playground/Counter";
// import { NameBox } from "./playground/NameBox";
// import { Roaster } from "./playground/Roaster";



function App() {
  return (
    <div>
      {/* <Roaster /> */}
      <Timer/>
      <DummyAPI/>
    </div>
  );
}

export default App;
