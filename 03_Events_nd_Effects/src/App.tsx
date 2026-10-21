import "./App.css";
import { ProfileCard } from "./components/profile-card/ProfileCard";
import { ProfileViews } from "./components/profile-card/ProfileViews";
import { SkillList } from "./components/skill-list/SkillList";
import { StudySessions } from "./components/skill-list/StudySessions";

function App() {
  return (
    <>
      <ProfileCard />
      <ProfileViews />
      <SkillList />
      <StudySessions />
    </>
  );
}

export default App;
