import "./App.css";
import { useState, useEffect } from "react";
import { ProfileCard } from "./components/profile-card/ProfileCard";
import { ProfileViews } from "./components/profile-views/ProfileViews";
import { SkillList } from "./components/skill-list/SkillList";
import { StudySessions } from "./components/study-sessions/StudySessions";
import type {Profile} from './types/index'


function App() {
  const [sessions, setSessions] = useState<string[]>(["Math", "React"]);
  const [profile, setProfile] = useState<Profile>({
    name: "Dev",
    city: "Jakarta",
    role: "Cisco TAC Engineer",
    birthYear: 1889,
  });

  useEffect(() => {
    document.title = `${profile.name} - ${sessions.length}`;
  }, [sessions, profile.name]);

  return (
    <>
      <ProfileCard profile={profile} setProfile={setProfile} />
      <ProfileViews />
      <SkillList />
      <StudySessions sessions={sessions} setSessions={setSessions} />
    </>
  );
}

export default App;
