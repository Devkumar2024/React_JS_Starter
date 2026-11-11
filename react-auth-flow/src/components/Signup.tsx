import React, { useState } from "react";
import type { SignUpFormDetails, SignUPFormErrors, StoredUser } from "../types/types";
import './component.css'

type SignupProps = {
  users: StoredUser[];
  onSignUpSuccess: (user: StoredUser) => void;
  onSwitchToLogin: () => void;
};

export function Signup({ onSignUpSuccess, onSwitchToLogin, users }: SignupProps) {
  const [signUpUser, setsignUpUser] = useState<SignUpFormDetails>({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valueErrors, setValueErrors] = useState<SignUPFormErrors>({});

  function handleSignupSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    let nameError: string | null = null;
    let emailError: string | null = null;
    let ageError: string | null = null;
    let passwordError: string | null = null;
    let confirmError: string | null = null;

    if (!signUpUser.name.trim()) nameError = `Input is empty!!`;

    if (!signUpUser.age.trim()) ageError = "Age required";
    else if (isNaN(Number(signUpUser.age))) ageError = "Invalid input";
    else if (Number(signUpUser.age) < 18) ageError = "Must be 18+";

    if (!signUpUser.email.trim()) emailError = `Input is empty!!`;
    else if (!(signUpUser.email.trim().includes("@") && signUpUser.email.trim().includes(".")))
      emailError = `Invalid email`;

    if (!signUpUser.password) passwordError = `Enter input`;
    else if (signUpUser.password.includes(" ") || signUpUser.password.length < 6) passwordError = `invalid password`;

    if (!signUpUser.confirmPassword) confirmError = "Confirm your password";
    else if (signUpUser.confirmPassword !== signUpUser.password) confirmError = "Passwords don't match";

    setValueErrors({
      name: nameError,
      age: ageError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmError,
    });

    if (!emailError && !passwordError && !ageError && !nameError && !confirmError) {
      const stored: StoredUser = {
        name: signUpUser.name,
        email: signUpUser.email,
        password: signUpUser.password,
        age: signUpUser.age,
      };

      const alreadyMember = users.find((u) => u.email === signUpUser.email);
      if (alreadyMember) {
        setValueErrors((prev) => ({ ...prev, email: `User already Exists` }));
      } else onSignUpSuccess(stored);
    }
  }

  function handleSignupChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setsignUpUser((prev) => ({ ...prev, [name]: value }));
    const field = name as keyof SignUpFormDetails;
    if (valueErrors[field]) setValueErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="signUpForm">
      <div className="heading">
        <h1>Hello User!, please signUp</h1>
      </div>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="text"
          name="name"
          value={signUpUser.name}
          onChange={handleSignupChange}
          placeholder="...enter name"
        />
        {valueErrors.name && <p style={{ color: "red" }}>{valueErrors.name}</p>}

        <input type="text" name="age" value={signUpUser.age} onChange={handleSignupChange} placeholder="...enter age" />
        {valueErrors.age && <p style={{ color: "red" }}>{valueErrors.age}</p>}

        <input
          type="text"
          name="email"
          value={signUpUser.email}
          onChange={handleSignupChange}
          placeholder="...enter email"
        />
        {valueErrors.email && <p style={{ color: "red" }}>{valueErrors.email}</p>}

        <input
          type="password"
          name="password"
          value={signUpUser.password}
          onChange={handleSignupChange}
          placeholder="...enter password"
        />
        {valueErrors.password && <p style={{ color: "red" }}>{valueErrors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          value={signUpUser.confirmPassword}
          onChange={handleSignupChange}
          placeholder="...confirmPassword"
        />
        {valueErrors.confirmPassword && <p style={{ color: "red" }}>{valueErrors.confirmPassword}</p>}

        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={onSwitchToLogin}>
        Already a member?
      </button>
    </div>
  );
}
