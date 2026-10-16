import { useState } from "react";
import type { Skills } from "../types/index";
import "../css/components.css";
import { Button } from "./ui/Button";

let nextId = 4;

export function SkillsList() {
  // 1. State
  const [skills, setSkills] = useState<Skills[]>([
    { id: 1, name: "Complete Checkpoint revision" },
    { id: 2, name: "React-TSX" },
    { id: 3, name: "Pushing code changes" },
  ]);

  const [input, setInput] = useState("");
  const [editSkill_ID, setEditSkillID] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  // 2. Add a skill
  function handleAdd() {
    const name = input.trim();

    if (!name) return;

    setSkills((prev) => [...prev, { id: nextId++, name }]);
    setInput("");
  }

  // 3. Delete a skill
  function handleDel(id: number) {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  }

  // 4a. Start editing
  function handleEditStart(id: number, name: string) {
    setEditSkillID(id);
    setEditValue(name);
  }

  // 4b. Save the edit
  function handleEditSave() {
    const name = editValue.trim();
    if (!name) return;
    setSkills((prev) => prev.map((skill) => (skill.id === editSkill_ID ? { ...skill, name } : skill)));
    setEditSkillID(null);
    setEditValue("");
  }

  // 4c. Cancel editing
  function handleEditCancel() {
    setEditSkillID(null);
    setEditValue("");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  // 5. Render the UI
  return (
    <div className="skillList">
      <h3>My Skills: {skills.length}</h3>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {editSkill_ID === skill.id ? (
              <>
                <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <Button onClick={handleEditSave}>✅</Button>
                <Button onClick={handleEditCancel}>❌</Button>
              </>
            ) : (
              <>
                {skill.name}
                <Button onClick={() => handleEditStart(skill.id, skill.name)}>✏️</Button>
                <Button onClick={() => handleDel(skill.id)}>🗑️</Button>
              </>
            )}
          </li>
        ))}
      </ul>

      <input value={input} onChange={handleInputChange} placeholder="Add skill..." />
      <Button onClick={handleAdd}>➕</Button>
    </div>
  );
}
