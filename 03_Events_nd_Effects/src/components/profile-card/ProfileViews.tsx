import { useState } from "react";
import '../../css/components.css'
import Button from "../ui/Button";

export function ProfileViews() {
  const [count, setCount] = useState<number>(0);

  function handleIncerement() {
    setCount((n) => n + 1);
  }
  function handleDecrease() {
    // n : current value, n-1 : prev value, if value is 0/-ve return max. which is 0
    setCount((n) => Math.max(0, n - 1));
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="ProfileViews">
      <h4>Profile Views</h4>
      <h3>{count}</h3>
      <Button onClick={handleIncerement}>Increase</Button>
      <Button onClick={handleDecrease}>Decrease</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
