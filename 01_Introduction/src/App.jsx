import Hello from "./HelloG";
import reactLogo from "./assets/react.svg";
import './App.css';
import Bye from './Bye'

function App() {
  return (
    <>
      <h1 className="test">App component</h1>
      <Hello />
      <img src={reactLogo} alt="react Logo" style={{ height: "150px" }} />
      <Bye />
    </>
  );
}

export default App;
