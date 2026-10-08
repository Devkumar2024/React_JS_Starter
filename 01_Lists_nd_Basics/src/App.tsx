/*
Create a simple profile page in App.tsx showing your name, age, city, current role, and a short introduction. Keep the information in JavaScript variables and use those variables inside JSX rather than writing everything directly into the markup.
*/
import { Header } from "./assets/components/02_Components_nd_props/Header";
import { Profile } from "./assets/components/02_Components_nd_props/Profile";
import { Footer } from "./assets/components/02_Components_nd_props/Footer";

function App() {
  return (
    <>
      <Header name="Ananya S." />
      <Profile
        name="Ananya Sharma"
        birthYear={2002}
        city="Mumbai"
        role="IAS"
        skills={["Public Admin", "Economics", "Hindi", "English"]}
      />
      <Profile
        name="Dev K."
        birthYear={2003}
        city="Bhikhiwind"
        role="Jr SE Intern"
        skills={["TypeScript", "NextJS", "NodeJS", "English"]}
      />
      <Footer name="Ananya Sharma" />
    </>
  );
}

export default App;
