import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import type { View, RegisterData } from "../types/types";
import { safeParse } from "../utils/storage";
import "./component.css";

function loadUsers(): RegisterData[] {
  const parsed = safeParse<unknown>("users", []);
  return Array.isArray(parsed) ? (parsed as RegisterData[]) : [];
}

function loadCurrentUser(): RegisterData | null {
  const parsed = safeParse<unknown>("currentUser", null);
  if (
    parsed &&
    typeof parsed === "object" &&
    typeof (parsed as RegisterData).email === "string"
  ) {
    return parsed as RegisterData;
  }
  return null;
}

export function AuthFlow() {
  const [users, setUsers] = useState<RegisterData[]>(loadUsers);
  const [currentUser, setCurrentUser] = useState<RegisterData | null>(loadCurrentUser);
  const [view, setView] = useState<View>(() => (currentUser ? "dashboard" : "login"));

  function handleRegisterSuccess(user: RegisterData) {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setView("dashboard");
  }

  function handleLoginSuccess(user: RegisterData) {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setView("dashboard");
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setView("login");
  }

  function handleClearAll() {
    const ok = window.confirm("Warning !! all users will be deleted");
    if (!ok) return;
    localStorage.removeItem("users");
    localStorage.removeItem("currentUser");
    setUsers([]);
    setCurrentUser(null);
    setView("login");
  }

  if (view === "dashboard" && currentUser) {
    return <Dashboard user={currentUser} onLogout={handleLogout} />;
  }

  return (
    <div className="basicForm">
      <h1 className="brandTitle">React Forms Project</h1>

      {view === "register" && (
        <Register
          users={users}
          onSuccess={handleRegisterSuccess}
          onSwitchToLogin={() => setView("login")}
        />
      )}

      {view === "login" && (
        <>
          <Login
            users={users}
            onSuccess={handleLoginSuccess}
            onSwitchToRegister={() => setView("register")}
          />
          <button type="button" className="clearAllBtn" onClick={handleClearAll}>
            Clear all data
          </button>
        </>
      )}
    </div>
  );
}