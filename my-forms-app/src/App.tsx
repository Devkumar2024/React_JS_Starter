import "./App.css";
import React, { useState } from "react";

type User = {
  username: string;
  email: string;
  age?: number;
};
function App() {
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    age: 0,
  });

  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  }

  return (
    <div className="inputForm">
      <h1>React forms</h1>
      <input type="text" name="username" value={userData.username} onChange={handleDataChange} placeholder="..name" />
      <input type="text" name="email" value={userData.email} onChange={handleDataChange} placeholder="..email" />
      <input type="text" name="age" value={userData.age} onChange={handleDataChange} placeholder="..age" />

      <p>
        Hello {userData.username}, how are you !! I am {userData.age} YO. You can react me out at {userData.email}
      </p>
    </div>
  );
}

export default App;
