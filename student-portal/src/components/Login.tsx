import React, { useState } from "react";
import type { RegisterData } from "../types/types";
import { EMAIL_REGEX } from "../utils/validation";   // ← yahi add karo

type LoginProps = {
  users: RegisterData[];
  onSuccess: (user: RegisterData) => void;
  onSwitchToRegister: () => void;
};

type LoginErrors = {
  email?: string;
  password?: string;
  form?: string;
};


export function Login({ users, onSuccess, onSwitchToRegister }: LoginProps) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errs: LoginErrors = {};
    if (!credentials.email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(credentials.email)) errs.email = "Enter a valid email";

    if (!credentials.password) errs.password = "Password is required";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const match = users.find(
      (u) => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password,
    );

    if (!match) {
      setErrors({ form: "Invalid email or password" });
      return;
    }

    setErrors({});
    onSuccess(match);
  }

  return (
    <div>
      <h5>Login</h5>
      <form onSubmit={handleSubmit} noValidate>
        {errors.form && <p className="error">{errors.form}</p>}

        <input
          type="email"
          name="email"
          value={credentials.email}
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Enter password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
        <button type="button" onClick={onSwitchToRegister}>
          Create account
        </button>
      </form>
    </div>
  );
}
