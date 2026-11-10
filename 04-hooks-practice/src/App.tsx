import "./App.css";
import { RefCounter } from "./playground/RefCounter";
import { Login } from "./playground/Login";
// import { DummyAPI } from "./playground/DummyAPI";
// import { LocalEffect } from "./playground/LocalEffect";
// import { Timer } from "./playground/Timer";
// import { Counter } from "./playground/Counter";
// import { NameBox } from "./playground/NameBox";
//  import { Roaster } from "./playground/Roaster";

function App() {
  return (
    <div>
      {/* <Roaster /> */}
      {/* <Timer /> */}
      {/* <LocalEffect /> */}
      {/* <DummyAPI /> */}
      {/* <Roaster/> */}
      <RefCounter />
      <Login />
    </div>
  );
}

export default App;
