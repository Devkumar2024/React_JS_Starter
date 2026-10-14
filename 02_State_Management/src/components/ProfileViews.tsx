import { useState } from "react";
import "./profile.css";
import type { Profile } from "../types";

export function ProfileViews() {
  const [num, setNum] = useState(0);
  const [profile, setProfile] = useState<Profile>({
    name : "Dev",
    city : "Ludhiana",
    role : "Jr. SE INtern",
  })

  const increment = () => setNum(num => num + 1);
  const decrement = () => {
    if (num > 0) setNum(num - 1);
  };
  const reset = () => setNum(0);
  const boost = () => {setNum((n) => n + 5);
};

  return (
    <div className="ProfileCard">
      <h1>Profile Views</h1>
      <p><b>Name : </b>{profile.name}</p>
      <p><b>city : </b>{profile.city}</p>
      <p><b>role : </b>{profile.role}</p>

      <h3>Score : </h3>
      <h4>{num === 0 ? <span style={{color: "red"}}>{num}</span> : num}</h4>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={boost}>Boost +3</button>
      <br/>
      <button onClick={()=> setProfile({...profile, city: "Delhi"})}> Change city</button>
    </div>
  );
}
