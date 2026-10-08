/*
Create a simple profile page in App.tsx showing your name, age, city, current role, and a short introduction. Keep the information in JavaScript variables and use those variables inside JSX rather than writing everything directly into the markup.
*/
import { Header } from "./assets/components/01_Foundations/Header";
import { Profile } from "./assets/components/01_Foundations/Profile";
import { Footer } from "./assets/components/01_Foundations/Footer";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
