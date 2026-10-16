import { useState } from "react";
import "../css/components.css";
import { Button } from "./ui/Button";

export function StudySessions() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter((num) => num + 1);
  }

  function handleDecrease() {
    if (counter > 0) {
      setCounter((num) => num - 1);
    }
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="StudySessions">
      <h1>Study Sessions Section</h1>
      <h4>{counter === 0 ? <span style={{ color: "orange" }}>{counter}</span> : counter}</h4>

      <Button onClick={handleIncrease}>+1</Button>
      <Button onClick={handleDecrease}>-1</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
