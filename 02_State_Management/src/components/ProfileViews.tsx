import { useState } from "react";
import "./profile.css";
import type { Profile } from "../types";

export function ProfileViews() {
  // const [num, setNum] = useState(0);
  const [profile, setProfile] = useState<Profile>({
    name: "Dev",
    city: "Ludhiana",
    role: "Jr. SE Intern",
  });
  const [draft, setDraft] = useState<Profile>(profile);
  const [isEditing, setIsEditing] = useState(false);

  // const increment = () => setNum((num) => num + 1);
  // const decrement = () => {
  //   if (num > 0) setNum(num - 1);
  // };
  // const reset = () => setNum(0);
  // const boost = () => {
  //   setNum((n) => n + 5);
  // };

  function handleEditStart() {
    setDraft(profile); // copy current saved values
    setIsEditing(true);
  }

  function handleSave() {
    setProfile(draft);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  function handleFieldChange(field: keyof Profile, value: string) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="ProfileCard">
      {isEditing ? (
        <>
          <input
            value={draft.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
          <input
            value={draft.city}
            onChange={(e) => handleFieldChange("city", e.target.value)}
          />
          <input
            value={draft.role}
            onChange={(e) => handleFieldChange("role", e.target.value)}
          />
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name: {profile.name}</p>
          <p>City: {profile.city}</p>
          <p>Role: {profile.role}</p>
          <button onClick={handleEditStart}>✏️ Edit Profile</button>
        </>
      )}
    </div>
  );
}
