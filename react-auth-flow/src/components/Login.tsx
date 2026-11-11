import React, { useState } from "react";
import type { LoginFormDetails, LoginFormErrors, User, StoredUser } from "../types/types";
import './component.css'

type LoginProps = {
  users: StoredUser[];
  onLoginSuccess: (user: User) => void;
  onSwitchToSignup: () => void;
};

export function Login({ onLoginSuccess, onSwitchToSignup, users }: LoginProps) {
  const [loginUser, setLoginUser] = useState<LoginFormDetails>({
    email: "",
    password: "",
  });
  const [valueErrors, setValueErrors] = useState<LoginFormErrors>({});

  function handleLoginSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    let emailError: string | null;
    let passwordError: string | null;

    if (!loginUser.email.trim()) emailError = `Input is empty!!`;
    else if (loginUser.email.trim().includes("@") && loginUser.email.trim().includes(".")) emailError = null;
    else emailError = `Invalid email`;

    if (!loginUser.password) passwordError = `Enter input`;
    else if (loginUser.password.includes(" ") || loginUser.password.length < 6) passwordError = `invalid password`;
    else passwordError = null;

    setValueErrors({
      email: emailError,
      password: passwordError,
    });

    const found = users.find((u)=> u.email === loginUser.email && u.password === loginUser.password);
    if(found){
      onLoginSuccess({email : loginUser.email,  name: found.name })
    }
    else{
      setValueErrors({email: "Invalid Credentails", password: "Invalid Credentails"})
    }
  }

  function handleloginChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setLoginUser((prev) => ({ ...prev, [name]: value }));

    const field = name as keyof LoginFormDetails;
    if (valueErrors[field]) {
      setValueErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <div className="loginForm">
      <div className="heading">
        <h1>Hello User!, please Login</h1>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="email"
          value={loginUser.email}
          onChange={handleloginChange}
          placeholder="...enter email"
        />
        {valueErrors.email ? <p style={{ color: "red" }}>{valueErrors.email}</p> : ""}
        <input
          type="password"
          name="password"
          value={loginUser.password}
          onChange={handleloginChange}
          placeholder="...enter password"
        />
        {valueErrors.password ? <p style={{ color: "red" }}>{valueErrors.password}</p> : ""}

        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={onSwitchToSignup}>New user? Signup</button>
    </div>
  );
}
