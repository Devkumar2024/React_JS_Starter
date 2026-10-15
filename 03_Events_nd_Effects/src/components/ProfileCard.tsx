import type { Profile } from "../types/index";
import { useState } from "react";
import "../css/components.css";

export function ProfileCard() {
  const [person, setPerson] = useState<Profile>({
    name: "Dev Khroud",
    city: "Mansa-Bathinda",
    role: "Intern",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [buffer, setBuffer] = useState<Profile>(person);

  function handleEditingStart() {
    setBuffer(person);
    setIsEditing(true);
  }

  function handleSave() {
    setPerson(buffer);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  function valueChangeHandler(key_val: keyof Profile, newValue: string) {
    setBuffer((prev) => ({ ...prev, [key_val]: newValue }));
  }

  return (
    <div className="ProfileCard">
      <h1>Profile Card Section</h1>

      {isEditing ? (
        <>
          <input value={buffer.name} onChange={(e) => valueChangeHandler("name", e.target.value)} />
          <input value={buffer.city} onChange={(e) => valueChangeHandler("city", e.target.value)} />
          <input value={buffer.role} onChange={(e) => valueChangeHandler("role", e.target.value)} />

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name : {person.name}</p>
          <p>City : {person.city}</p>
          <p>Role : {person.role}</p>

          <button onClick={handleEditingStart}>Edit Profile Section</button>
        </>
      )}
    </div>
  );
}
