import React, { useState } from "react";
// useState : Remembers information and displays it on update

export function LiveInput() {
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // currentTarget : element on which event handler is registered

    //   currentTarget vs target:
    // - target refers to the element where the event originated.
    // - currentTarget refers to the element whose handler is currently executing.
    setName(e.currentTarget.value);
  }

  return (
    <>
      <h3>Enter your Name : </h3>

      <input type="text" value={name} onChange={handleChange} placeholder="Type you text..." />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type you text..." />
      <p>Perview : Hello, this is text {name || "Empty"}</p>
      <p>Perview 2 : Hello, this is text {text || "Guest"}</p>
    </>
  );
}
