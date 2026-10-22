// ✅ SAHI: props accept karo
import { useState } from 'react';
import type { Skill } from '../../types';

type Props = {
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
};

export function SkillList({ skills, setSkills }: Props) {
  const [input, setInput] = useState(''); // Input local rahega

  const addSkill = () => {
    if (!input.trim()) return;
    setSkills(prev => [...prev, { id: Date.now(), name: input }]);
    setInput('');
  };

  const removeSkill = (id: number) => {
    setSkills(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name} <button onClick={() => removeSkill(skill.id)}>X</button>
          </li>
        ))}
      </ul>
      {skills.length === 0 && <p>No skills yet</p>}

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addSkill}>Add</button>
    </div>
  );
}