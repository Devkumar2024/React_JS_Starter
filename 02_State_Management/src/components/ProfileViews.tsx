import { useState } from "react";
import "./profile.css";

export function ProfileViews() {
  const [num, setNum] = useState(0);

  const increment = () => setNum(num + 1);
  const decrement = () => {
    if (num > 0) setNum(num - 1);
  };
  const reset = () => setNum(0);
  const boost = () => {
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  };

  return (
    <div>
      <h1>Profile Views</h1>
      <p>{num}</p>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={boost}>Boost +3</button>
    </div>
  );
}
