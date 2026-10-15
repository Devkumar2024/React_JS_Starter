import "./profile.css";
import type { Profile } from "../types/index";
import { useState } from "react";

export function ProfileViews() {
  const [profile, setProfile] = useState<Profile>({
    Name: "Dev kumar",
    Age: 26,
    Current_company: "Sophize Tech. PVT. LTD.",
    City: "Amritsar",
    Role: "Intern",
    Skills: ["React-TSX", "Drawing", "Es-6"],
  });

  // person is in view or edit mode?, bydef in non edit mode
  const [isEditing, setIsEditing] = useState(false);
  // Temporray buffer state
  const [draft, setDraft] = useState<Profile>(profile);

  function handleEditStart() {
    setDraft(profile); // copy current values
    setIsEditing(true); // come in editing mode
  }

  function handleSave() {
    setProfile(draft); // set the drafted state, done in editing mode
    setIsEditing(false); // back to non edit mode
  }

  function handleCancel() {
    setIsEditing(false);
  }

  function valueChangeHandler(key_val: keyof Profile, newValue: string | number) {
    if (key_val === "Skills" && typeof newValue === "string") {
      // Split by comma and trim extra whitespace from each skill
      const skillsArray = newValue.split(",").map((s) => s.trimStart());
      setDraft((prev_val) => ({ ...prev_val, Skills: skillsArray }));
    } else {
      setDraft((prev_val) => ({ ...prev_val, [key_val]: newValue }));
    }
  }

  return (
    <div className="ProfileSection">
      <h1>These are my Credentials 👋</h1>

      {isEditing ? (
        <>
          <input
            value={draft.Name}
            onChange={(e) => valueChangeHandler("Name", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
          <input
            value={draft.Age}
            onChange={(e) => valueChangeHandler("Age", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
          <input
            value={draft.Current_company}
            onChange={(e) => valueChangeHandler("Current_company", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
          <input
            value={draft.City}
            onChange={(e) => valueChangeHandler("City", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
          <input
            value={draft.Role}
            onChange={(e) => valueChangeHandler("Role", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />

          {/* Skill edit */}
          <input
            value={draft.Skills.join(", ")}
            placeholder="Skills (a, b, c...)"
            onChange={(e) => valueChangeHandler("Skills", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />

          <button onClick={handleSave}>💾 Save</button>
          <button onClick={handleCancel}> Cancel</button>
        </>
      ) : (
        <>
          <p>
            <b>Name : </b>
            {profile.Name}
          </p>

          <p>
            <b>Age : </b>
            {profile.Age}
          </p>

          <p>
            <b>Current Orgn. : </b>
            {profile.Current_company}
          </p>

          <p>
            <b>City : </b>
            {profile.City}
          </p>

          <p>
            <b>Role : </b>
            {profile.Role}
          </p>

          <p>
            <b>My Skills</b>
            <ol>
              {profile.Skills.filter(Boolean).map((ele, idx) => (
                <li key={idx}>{ele}</li>
              ))}
            </ol>
          </p>

          <button onClick={handleEditStart}>✏️ Edit Credentials</button>
        </>
      )}
    </div>
  );
}
