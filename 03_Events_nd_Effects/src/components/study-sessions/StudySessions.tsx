import { useEffect } from 'react';

type Props = {
  sessions: number;                                          // ✅ number
  setSessions: React.Dispatch<React.SetStateAction<number>>; // ✅ number
};

export function StudySessions({ sessions, setSessions }: Props) {
  const handleIncrease = () => setSessions(prev => prev + 1);
  const handleDecrease = () => setSessions(prev => Math.max(0, prev - 1));
  const handleReset = () => setSessions(0);

  useEffect(() => {
    document.title = `Dashboard - ${sessions} sessions`;
  }, [sessions]);

  return (
    <div>
      <h2>Study Sessions</h2>
      <p>Sessions: {sessions}</p>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}