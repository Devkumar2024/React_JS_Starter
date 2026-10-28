import { useState, useEffect } from "react";
import "./css/component.css";

export function Timer() {
  const [live, setLive] = useState(true);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!live) return;

    const intervalID = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [live]);

  function handleToggle() {
    setLive(!live);
  }

  return (
    <div>
      <p>Seconds : {sec}</p>
      <button onClick={handleToggle}>{live ? "Stop" : "Start"}</button>
    </div>
  );
}
