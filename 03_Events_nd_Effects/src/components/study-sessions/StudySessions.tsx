import '../../css/components.css';
import Button from "../ui/Button";

interface Props {
  sessions: string[];
  setSessions: React.Dispatch<React.SetStateAction<string[]>>;
}

export function StudySessions({ sessions, setSessions }: Props) {
  function handleAdd() {
    setSessions((prev) => [...prev, "New Session"]);
  }

  return (
    <div className="ProfileViews">
      <h4>Study Sessions</h4>
      <p>Total: {sessions.length}</p>
      
      <ul>
        {sessions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <Button onClick={handleAdd}>Add Session</Button>
    </div>
  );
}