import { useState, useRef } from "react";
import type { Skill } from "../../types/index";
import '../../css/components.css'

export function SkillList() {
  const nextID = useRef(3);
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React-TSX" },
    { id: 2, name: "Node JS" },
  ]);
  const [input, setInput] = useState<string>("");

  function handleSkillsAdd(){
    const n = input.trim();
    if (!n) return;
    const newID = nextID.current++;
    setSkills((prev) => [...prev, { id: newID, name: n }]);
    setInput("");
  }

  function handleDelete(id: number) {
    // yaha array nhi element pass hua hai
    setSkills((prev) => prev.filter((ele) => ele.id !== id));
  }

  return (
    <div className="SkillList">
      <h5>My skills : {skills.length === 0 ? <span> No skills </span> : skills.length}</h5>
      <ul>
        {skills.map((ele) => (
          <li key={ele.id}>
            {ele.id} = {ele.name}
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="add skills..." />
      <button onClick={handleSkillsAdd}>Add skills</button>
    </div>
  );
}
