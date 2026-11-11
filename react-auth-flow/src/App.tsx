import { useState, useEffect } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";
import type { User, StoredUser } from "./types/types";

type View = "login" | "signup" | "dashboard";

function App() {
  const [currentView, setCurrentView] = useState<View>("signup");
  const [users, setUsers] = useState<StoredUser[]>(() => {
    try {
      const saved = localStorage.getItem("appUsers");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    localStorage.setItem("appUsers", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      {currentView === "login" ? (
        <Login
          users={users}
          onLoginSuccess={(u) => {
            setUser(u);
            setCurrentView("dashboard");
          }}
          onSwitchToSignup={() => setCurrentView("signup")}
        />
      ) : currentView === "signup" ? (
        <Signup
          users={users}
          onSignUpSuccess={(u) => {
            setUsers((prev) => [...prev, u]);
            setUser({ email: u.email, name: u.name });
            setCurrentView("dashboard");
          }}
          onSwitchToLogin={() => setCurrentView("login")}
        />
      ) : currentView === "dashboard" && user ? (
        <Dashboard
          user={user}
          users={users}
          onLogout={() => {
            setUser(null);
            setCurrentView("login");
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
