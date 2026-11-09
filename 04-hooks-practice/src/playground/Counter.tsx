import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;

    if (name === "add") {
      setCount((prev) => prev + 1);
    } else if (name === "subtract") {
      setCount((prev) => Math.max(0, prev - 1));
    } else {
      setCount(0);
    }
  }

  return (
    <div className="counter">
      <h1 style={{ color: count === 0 ? "#ef4444" : "#38bdf8" }}>Count: {count}</h1>
      <button name="add" onClick={handleButton}>
        Add
      </button>
      <button name="subtract" onClick={handleButton}>
        Subtract
      </button>
      <button name="reset" onClick={handleButton}>
        Reset
      </button>
    </div>
  );
}
