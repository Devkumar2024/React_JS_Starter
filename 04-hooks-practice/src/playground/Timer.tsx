import React, { useState, useEffect } from "react";

export function Timer() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setisRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;
    // main function
    const id = setInterval(() => setCount((s) => s + 1), 1000);

    // cleanup code
    return () => clearInterval(id);

    // dependency
  }, [isRunning]);

  function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;
    if (name === "start") setisRunning(true);
    else if (name === "stop") setisRunning(false);
    else {
      setCount(0);
    }
  }

  return (
    <div className="timer">
      <h1>Timer : {count}</h1>
      <button name="start" onClick={handleButton}>
        Start
      </button>
      <button name="stop" onClick={handleButton}>
        Stop
      </button>
      <button name="reset" onClick={handleButton}>
        Reset
      </button>
    </div>
  );
}
