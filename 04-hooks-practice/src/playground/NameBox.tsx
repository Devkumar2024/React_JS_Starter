import React, { useState } from "react";

export function NameBox() {
  const [name, setName] = useState<string>("");
  const [wordcount, setWordCount] = useState<number>(0);
  const [preview, setPreview] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    // \s (Whitespace character) and + for more spaces, /..../ is a bracket
    setWordCount(value.trim() === "" ? 0 : value.trim().split(/\s+/).length);
    if (wordcount >= 0 && wordcount <= 30) {
      setName(value);
    }
  }

  function handlePreview() {
    setPreview((prev) => !prev);
  }

  return (
    <div className="nameBox">
      <h5>Controlled name box</h5>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handlePreview}>Show</button>

      {preview && (
        <div>
          <h3>Word Count :: {wordcount}/30</h3>
          <p> Hello {name}</p>
        </div>
      )}
    </div>
  );
}
