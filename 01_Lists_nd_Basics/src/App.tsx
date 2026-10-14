import { Header } from "./assets/components/02_Components_nd_props/Header";
import { Profile } from "./assets/components/02_Components_nd_props/Profile";
import { Footer } from "./assets/components/02_Components_nd_props/Footer";
import { profiles } from "./assets/data/Profiles";

function App() {
  return (
    <>
      <Header name="Dev K. 👍" />
      {profiles.map((value) => {
        return <Profile key={value.name} {...value} />;
      })}
      <Footer name="Dev Sharma" />
    </>
  );
}

export default App;
