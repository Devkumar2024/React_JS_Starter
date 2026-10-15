import { useState } from "react";
import "../css/components.css";

export function StudySessions() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((num) => num + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter((num) => num - 1);
    }
  }

  return (
    <div className="StudySessions">
      <h1>Study Sessions Section</h1>
      <h4>{counter === 0 ? <span style={{ color: "orange" }}>{counter}</span> : counter}</h4>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  );
}
