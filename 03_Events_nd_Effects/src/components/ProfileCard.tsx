import type { Profile } from "../types/index";
import { useState } from "react";
import "../css/components.css";
import { Button } from "./ui/Button";
import type { ChangeEvent } from 'react'

export function ProfileCard() {
  const [person, setPerson] = useState<Profile>({
    name: "Dev Khroud",
    city: "Mansa-Bathinda",
    role: "Intern",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [buffer, setBuffer] = useState<Profile>(person);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  function handleToggleDetails() {
    setShowDetails((prev) => !prev);
  }

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

  function valueChangeHandler(e : ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.currentTarget;
    setBuffer((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="ProfileCard">
      <h1>Profile Card Section</h1>

      {isEditing ? (
        <>
          <input value={buffer.name} onChange={valueChangeHandler} />
          <input value={buffer.city} onChange={valueChangeHandler} />
          <input value={buffer.role} onChange={valueChangeHandler} />

          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <>
          <p>Name : {person.name}</p>
          <p>City : {person.city}</p>
          <p>Role : {person.role}</p>

          <Button onClick={handleEditingStart}>Edit Profile Section</Button>
        </>
      )}
      <Button onClick={handleToggleDetails}>Show Details</Button>
      {showDetails && (
        <div>
          <p>
            <b>Joined :</b> October 2026
          </p>
          <p>
            <b>Department :</b> Full stack Engineering
          </p>
        </div>
      )}
    </div>
  );
}
