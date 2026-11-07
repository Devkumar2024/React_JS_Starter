import React, { useState } from "react";

export function BasicSubmitForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  function handleInputForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(name, age, email);
  }

  function handleReset() {
    setName("");
    setAge(0);
    setEmail("");
  }

  return (
    <div className="SubmitForm">
      <form onSubmit={handleInputForm}>
        <input type="text" value={name} placeholder="...add name" onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} placeholder="email please" onChange={(e) => setEmail(e.target.value)} />
        <input type="number" value={age} placeholder="...age" onChange={(e) => setAge(Number(e.target.value))} />

        <button type="submit">Submit form</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}
