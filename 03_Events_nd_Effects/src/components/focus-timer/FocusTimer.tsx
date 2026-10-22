import { useState, useEffect } from 'react';

export function FocusTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleToggle = () => setRunning(prev => !prev);
  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
  };

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>Focus Timer</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{formatTime(seconds)}</p>
      <button onClick={handleToggle}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}