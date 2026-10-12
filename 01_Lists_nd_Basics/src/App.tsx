/*
Create a simple profile page in App.tsx showing your name, age, city, current role, and a short introduction. Keep the information in JavaScript variables and use those variables inside JSX rather than writing everything directly into the markup.
*/
import { Header } from "./assets/components/02_Components_nd_props/Header";
 import { Profile } from "./assets/components/02_Components_nd_props/Profile";
import { Footer } from "./assets/components/02_Components_nd_props/Footer";
import { profiles } from "./assets/data/Profiles";

function App() {
  return (
    <>
      <Header name="Dev K. 👍" />
      {
        profiles.map((value)=>{
          return < Profile  key = {value.name} {...value}/> 
        })
      }
      <Footer name="Dev Sharma" />
    </>
  );
}

export default App;
