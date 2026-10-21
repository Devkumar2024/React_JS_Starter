import React, { useState } from "react";
import type { Profile } from "../../types/index";
import "../../css/components.css";
import Button from "../ui/Button";

export function ProfileCard() {
  const [profile, setProfile] = useState<Profile>({
    name: "Dev",
    city: "Jakarta",
    role: "Cisco TAC Engineer",
    birthYear: 1889,
  });
  // editable from of profilecard
  const [draft, setDraft] = useState<Profile>(profile);
  // Mode : edit/ non-edit
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setDraft((prev) => ({
      ...prev,
      [name]: name === "birthYear" ? Number(value) : value,
    }));
  }

  function handleContent() {
    setDraft(profile);
    setIsEditing(true);
  }

  function handleCancel() {
    setDraft(profile);
    setIsEditing(false);
  }

  function handleSave() {
    setProfile(draft);
    setIsEditing(false);
  }

  function handleUserDetails() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div className="profileCard">
      <h4>Hello all, my details : </h4>
      {isEditing ? (
        <>
          <input name="name" value={draft.name} onChange={handleValue} />
          <br />
          <input name="city" value={draft.city} onChange={handleValue} />
          <br />
          <input name="role" value={draft.role} onChange={handleValue} />
          <br />
          <input name="birthYear" value={draft.birthYear} onChange={handleValue} />
          <br />

          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <p>Name : {profile.name}</p>
          <p>Worplace : {profile.city}</p>
          <p>Role : {profile.role}</p>
          <p>YOB : {profile.birthYear}</p>
          <Button onClick={handleContent}>Change Content</Button>
        </>
      )}

      <Button onClick={handleUserDetails}>Show details</Button>
      {showDetails && (
        <>
          <p>Role: {profile.role}</p>
          <p>City: {profile.city}</p>
        </>
      )}
    </div>
  );
}
