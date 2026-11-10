import React, { useRef } from "react";

export function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  console.log(`render`);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(emailRef.current?.value);
    console.log(passRef.current?.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passRef} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}