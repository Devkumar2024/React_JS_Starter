import "./App.css";
import React, { useState } from "react";

type User = {
  username: string;
  email: string;
  age: number | "";
};

function App() {
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    age: "",
  });

  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setUserData((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // State already holds everything, so no need for FormData
    const fromData = new FormData(e.currentTarget);
    const name = fromData.get("username");
    const age = fromData.get("age");
    console.log(`${name} ${age}years old`);
  }

  return (
    <div className="inputForm">
      <h1>React forms</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={userData.username} onChange={handleDataChange} placeholder="..name" />
        <input type="email" name="email" value={userData.email} onChange={handleDataChange} placeholder="..email" />
        <input type="number" name="age" value={userData.age} onChange={handleDataChange} placeholder="..age" />

        <button type="submit">SUBMIT</button>
      </form>

      <p>
        Hello {userData.username}, how are you!! I am {userData.age} years old. You can reach me out at {userData.email}
      </p>
    </div>
  );
}

export default App;
