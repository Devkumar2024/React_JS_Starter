import "./App.css";
import { ProfileViews } from "./components/ProfileViews";
import { StudySessions } from "./components/StudySessions";
import { SkillsList } from "./components/SkillsList";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <>
      <ProfileCard />
      <ProfileViews />
      <StudySessions />
      <SkillsList />
    </>
  );
}

export default App;
