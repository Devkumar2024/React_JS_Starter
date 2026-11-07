import React, { useState } from "react";
import type { RegisterData } from "../types/types";
import { EMAIL_REGEX } from "../utils/validation";

type LoginProps = {
  users: RegisterData[];
  onSuccess: (user: RegisterData) => void;
  onSwitchToRegister: () => void;
};

type LoginFormState = { email: string; password: string };
type LoginErrors = { email?: string; password?: string; form?: string };

const initialForm: LoginFormState = { email: "", password: "" };

export function Login({ users, onSuccess, onSwitchToRegister }: LoginProps) {
  const [credentials, setCredentials] = useState<LoginFormState>(initialForm);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data: LoginFormState): LoginErrors {
    const errs: LoginErrors = {};
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(data.email)) errs.email = "Enter a valid email";
    if (!data.password) errs.password = "Password is required";
    return errs;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    const field = name as keyof LoginFormState;
    const nextData = { ...credentials, [field]: value };
    setCredentials(nextData);

    setErrors((prev) => {
      const next = { ...prev };
      delete next.form;

      if (submitted) {
        const v = validate(nextData);
        if (v[field]) next[field] = v[field];
        else delete next[field];
      } else {
        delete next[field];
      }
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    const v = validate(credentials);
    if (Object.keys(v).length > 0) return setErrors(v);

    const normalizedEmail = credentials.email.trim().toLowerCase();
    const match = users.find((u) => u.email.toLowerCase() === normalizedEmail && u.password === credentials.password);

    if (!match) return setErrors({ form: "Invalid email or password" });

    setCredentials({ ...initialForm });
    setErrors({});
    setSubmitted(false);
    onSuccess(match);
  }

  return (
    <div className="authCard">
      <h2>Welcome back</h2>
      <p className="authSubtitle">Sign in to your account</p>

      <form onSubmit={handleSubmit} noValidate>
        {errors.form && <div className="formError">{errors.form}</div>}

        <input
          type="email"
          name="email"
          autoComplete="email"
          value={credentials.email}
          placeholder="Email address"
          aria-invalid={!!errors.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={credentials.password}
          placeholder="Password"
          aria-invalid={!!errors.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Sign in</button>
        <button type="button" onClick={onSwitchToRegister}>
          Create an account
        </button>
      </form>
    </div>
  );
}
