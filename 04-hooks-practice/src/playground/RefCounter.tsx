import { useState, useRef, useEffect } from "react";

export function RefCounter() {
  const [time, setTime] = useState<number>(0);
  // memorizes values, ek hi baar create hoga object, across the rerender
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // console.log(intervalRef);

  function handleStart() {
    // clears interval which is already runnning
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Stopwatch: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}