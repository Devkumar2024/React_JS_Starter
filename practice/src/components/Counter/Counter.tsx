import { useState } from "react";
import { Button } from "../../ui/Button";

export function Counter() {
  const [num, setNum] = useState(0);

  function handleIncrease() {
    setNum((num) => num + 1);
  }

  function handleDecrease() {
    setNum((num) => num - 1);
  }

  function handleReset() {
    setNum(0);
  }

  return (
    <div className="counter">
      <h2>{num == 0 ? <span style={{ color: "red" }}>{num}</span> : num}</h2>
      <br />

      <Button onClick={handleIncrease}>+1</Button>
      <Button onClick={handleDecrease}>-1</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
