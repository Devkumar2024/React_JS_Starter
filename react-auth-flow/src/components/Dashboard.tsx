import React, { useState } from "react";
import type { User, StoredUser } from "../types/types";
import './component.css'

type DashboardProps = {
  user: User;
  users: StoredUser[];
  onLogout: () => void;
};

export function Dashboard({ user, onLogout, users }: DashboardProps) {
  const [companyInput, setCompanyInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [savedInfo, setSavedInfo] = useState({ company: "", role: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSavedInfo({ company: companyInput, role: roleInput });
    setIsEditing(false);
  }

  function handleEditClick() {
    setCompanyInput(savedInfo.company);
    setRoleInput(savedInfo.role);
    setIsEditing(true);
  }

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="heading">
            <h3>Profile Info</h3>
          </div>
          <p>
            <strong>Name:</strong> {user.name ?? "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Total Users Registered:</strong> {users.length}
          </p>

          {/* Saved Info Display */}
          {savedInfo.company && (
            <p>
              <strong>Current Orgn:</strong> {savedInfo.company}
            </p>
          )}
          {savedInfo.role && (
            <p>
              <strong>Designation:</strong> {savedInfo.role}
            </p>
          )}
        </div>

        {/* Work Info Card */}
        <div className="work-card">
          <h3>Work Information</h3>

          {isEditing ? (
            // Agar Editing mode on hai toh Form dikhao
            <form onSubmit={handleSubmit}>
              <p>Add your company and role here.</p>
              <input
                type="text"
                placeholder="Company Name"
                value={companyInput}
                onChange={(e) => setCompanyInput(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Role / Designation"
                value={roleInput}
                onChange={(e) => setRoleInput(e.target.value)}
                required
              />
              <button type="submit">Save Details</button>
            </form>
          ) : (
            // Agar Saved hai toh Edit button dikhao
            <div>
              <p>✅ Details saved successfully!</p>
              <button onClick={handleEditClick}>Edit Details</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
