import { useState } from "react";
import type { Skills } from "../types/index";
import "../css/components.css";

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

                <button onClick={handleEditSave} aria-label="Save" title="Save">
                  ✅
                </button>
                <button onClick={handleEditCancel} aria-label="Cancel" title="Cancel">
                  ❌
                </button>
              </>
            ) : (
              <>
                {skill.name}

                <button onClick={() => handleEditStart(skill.id, skill.name)} aria-label="Edit" title="Edit">
                  ✏️
                </button>

                <button onClick={() => handleDel(skill.id)} aria-label="Delete" title="Delete">
                  🗑️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add skill..." />

      <button onClick={handleAdd} aria-label="Add Skill" title="Add Skill">
        ➕
      </button>
    </div>
  );
}
