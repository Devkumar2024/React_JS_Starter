import "./profile.css";
import type { Skill } from "../types/index";
import { useState } from "react";
let nextId: number = 4;

export function SkillSet() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "Complete Checkpoint revison" },
    { id: 2, name: "React-TSX" },
    { id: 3, name: "Pushing code changes" },
  ]);
  // add new skills field management
  const [input, setInput] = useState("");
  // Which skill is being edited, Id tracking, null : No skill is being edited
  const [editSkill_ID, setEditSkillID] = useState<number | null>(null);
  // temporary buffer state for skill edit
  const [editValue, setEditValue] = useState("");

  function handleAdd() {
    const name = input.trim();
    if (!name) return;
    setSkills((prev: Skill[]) => {
      return [...prev, { id: nextId++, name }];
    });
    setInput("");
  }

  function handleDel(id: number) {
    setSkills((prev) => prev.filter((ele) => ele.id !== id));
  }

  function handleEditStart(id: number, currentName: string) {
    setEditSkillID(id);
    setEditValue(currentName);
  }

  function handleEditSave() {
    if (editSkill_ID === null) return;
    const trimmedName = editValue.trim();
    if (!trimmedName) return;

    setSkills((prev) =>
      // Go till id which we want to edit
      prev.map((s) => (s.id === editSkill_ID ? { ...s, name: trimmedName } : s)),
    );
    setEditSkillID(null);
    setEditValue("");
  }

  function handleEditCancel() {
    setEditSkillID(null);
    setEditValue("");
  }

  return (
    <div className="Skills">
      <h1>Pending Work List 🛠️ : {skills.length}</h1>

      {skills.length === 0 ? (
        <p> Add Work !!! </p>
      ) : (
        <ul>
          {skills.map((skill) => {
            return (
              <li key={skill.id}>
                {editSkill_ID === skill.id ? (
                  // editing mode
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => {
                        setEditValue(e.target.value);
                      }}
                    />

                    <button
                      onClick={handleEditSave}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleEditSave();
                        if (e.key === "Escape") handleEditCancel();
                      }}>
                      💾
                    </button>
                    <button
                      onClick={handleEditCancel}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleEditSave();
                        if (e.key === "Escape") handleEditCancel();
                      }}>
                      ✖️
                    </button>
                  </>
                ) : (
                  // Value mode
                  <>
                    {skill.name}
                    <button onClick={() => handleEditStart(skill.id, skill.name)}> ✏️ Edit</button>
                    <button onClick={() => handleDel(skill.id)}>👉🏻🗑️</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Controlled Input */}
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Skill...." />
      <button onClick={handleAdd}>Add Skills</button>
    </div>
  );
}
