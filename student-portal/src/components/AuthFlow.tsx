import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import type { View, RegisterData } from "../types/types";
import { safeParse } from "../utils/storage";
import "./component.css";

// localStorage se users load karo — array nahi mila to khaali array
function loadUsers(): RegisterData[] {
  const parsed = safeParse<unknown>("users", []);
  return Array.isArray(parsed) ? (parsed as RegisterData[]) : [];
}

// localStorage se currentUser load karo — shape valid ho tabhi return karo
function loadCurrentUser(): RegisterData | null {
  const parsed = safeParse<unknown>("currentUser", null);
  if (parsed && typeof parsed === "object" && typeof (parsed as RegisterData).email === "string") {
    return parsed as RegisterData;
  }
  return null;
}

export function AuthFlow() {
  const [users, setUsers] = useState<RegisterData[]>(loadUsers);
  const [currentUser, setCurrentUser] = useState<RegisterData | null>(loadCurrentUser);
  // agar user pehle se logged in hai to dashboard, warna login
  const [view, setView] = useState<View>(() => (currentUser ? "dashboard" : "login"));

  function handleRegisterSuccess(user: RegisterData) {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));

    // register ke baad auto-login — dashboard pe seedha bhejo
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
    const ok = window.confirm("Sab users aur current login delete ho jayenge. Continue?");
    if (!ok) return;

    localStorage.removeItem("users");
    localStorage.removeItem("currentUser");
    setUsers([]);
    setCurrentUser(null);
    setView("login");
  }

  return (
    <div>
      <h1>React Forms Project</h1>

      {view === "dashboard" && currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <div className="basicForm">
          {view === "register" && (
            <Register users={users} onSuccess={handleRegisterSuccess} onSwitchToLogin={() => setView("login")} />
          )}
          {view === "login" && (
            <>
              <Login users={users} onSuccess={handleLoginSuccess} onSwitchToRegister={() => setView("register")} />
              <button type="button" className="clearAllBtn" onClick={handleClearAll}>
                Clear all data
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
