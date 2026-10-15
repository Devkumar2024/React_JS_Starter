import { useState } from "react";
import "./profile.css";
import type { Skill } from "../types/index";
let nextId: number = 4;

export function SkillSet() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "TypeScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Node.js" },
  ]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  function handleAdd() {
    const name = input.trim();
    if (!name) return;
    setSkills((prev) => {
      return [...prev, { id: nextId++, name }];
    });
    setInput("");
  }

  function handleDel(id: number) {
    // _ is used to ignore, can use ele also
    setSkills((prev) => prev.filter((ele) => ele.id !== id));
  }

  function handleEditStart(id: number, currentName: string) {
    setEditingId(id);
    setEditValue(currentName);
  }

  function handleEditSave() {
    if (editingId === null) return;
    const trimmed = editValue.trim();
    if (!trimmed) return;

    setSkills((prev) =>
      prev.map((s) => (s.id === editingId ? { ...s, name: trimmed } : s)),
    );
    setEditingId(null);
    setEditValue("");
  }

  function handleEditCancel() {
    setEditingId(null);
    setEditValue("");
  }

  return (
    <div className="Skills">
      <h1>🛠️ Skills (Total Skills: {skills.length})</h1>

      {skills.length === 0 ? (
        <p>Add Skills !!</p>
      ) : (
        <ul>
          {skills.map((skill) => {
            console.log("skill:", skill.id, skill.name);
            return (
              <li key={skill.id}>
                {editingId === skill.id ? (
                  // EDIT MODE
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={handleEditSave}>💾 Save</button>
                    <button onClick={handleEditCancel}>Cancel</button>
                  </>
                ) : (
                  // VIEW MODE
                  <>
                    {skill.name}
                    <button
                      onClick={() => handleEditStart(skill.id, skill.name)}
                    >
                      ✏️ Edit
                    </button>
                    <button onClick={() => handleDel(skill.id)}>Remove</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Controlled Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Skill...."
      />

      <button onClick={handleAdd}>Add Skills</button>
    </div>
  );
}

// onKeyDown={(e) => {
//   if (e.key === "Enter") handleEditSave();
//   if (e.key === "Escape") handleEditCancel();
// }}
