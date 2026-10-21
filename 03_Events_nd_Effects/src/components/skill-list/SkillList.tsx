import React, { useState, useRef } from "react";
import type { Skill } from "../../types/index";
import "../../css/components.css";
import Button from "../ui/Button";

export function SkillList() {
  const nextID = useRef(3);
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React-TSX" },
    { id: 2, name: "Node JS" },
  ]);
  const [input, setInput] = useState<string>("");

  function handleSkillsAdd() {
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

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSkillsAdd();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  return (
    <div className="SkillList">
      <h5>My skills : {skills.length === 0 ? <span> No skills </span> : skills.length}</h5>
      <ul>
        {skills.map((ele) => (
          <li key={ele.id}>
            {ele.id} = {ele.name}
            <Button onClick={() => handleDelete(ele.id)}>Delete</Button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="add skills..." />
        <Button type="submit">Add skills</Button>
      </form>
    </div>
  );
}
