import React, { useState } from "react";

export function BasicSubmitForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  function handleReset() {
    setName("");
    setEmail("");
    setAge(0);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Submitted values:", { name, email, age });

    // 2. Start loading state
    setIsSubmitting(true);
    setSuccessMessage("");

    // 3. Simulate a server request (learning only — no real backend here)
    setTimeout(() => {
      // 4. After the "request" finishes
      setIsSubmitting(false);
      setSuccessMessage("Form submitted successfully!");
    }, 1000);
  }

  return (
    <div>
      <div className="basicForm"></div>
      <h1>Basic submit form</h1>
      {isSubmitting ? (
        <p>Loading.....</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="age"
            placeholder="enter age..."
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Info"}
          </button>
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      )}
      <button type="button" onClick={handleReset} style={{ marginTop: "20px" }}>
        Reset data
      </button>
    </div>
  );
}
