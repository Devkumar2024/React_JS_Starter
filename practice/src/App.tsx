import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { LiveInput } from "./components/liveInput/LiveInput";
import { Todos } from "./components/todo/Todos";

function App() {
  return (
    <>
      <Counter />
      <LiveInput />
      <Todos />
    </>
  );
}

export default App;
