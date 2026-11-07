import React, { useState } from "react";
import type { RegisterData } from "../types/types";
import { EMAIL_REGEX } from "../utils/validation";

type LoginProps = {
  users: RegisterData[];
  onSuccess: (user: RegisterData) => void;
  onSwitchToRegister: () => void;
};

type LoginFormState = {
  email: string;
  password: string;
};

type LoginErrors = {
  email?: string;
  password?: string;
  form?: string;
};

const initialForm: LoginFormState = {
  email: "",
  password: "",
};

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
      // "Invalid credentials" typing pe hamesha clear ho
      delete next.form;

      // submit ke baad hi field error live update karo
      if (submitted) {
        const validationErrors = validate(nextData);
        if (validationErrors[field]) next[field] = validationErrors[field];
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

    const validationErrors = validate(credentials);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Register mein email trim + lowercase store hota hai — yahan bhi same normalize
    const normalizedEmail = credentials.email.trim().toLowerCase();
    const match = users.find((u) => u.email.toLowerCase() === normalizedEmail && u.password === credentials.password);

    if (!match) {
      setErrors({ form: "Invalid email or password" });
      return;
    }

    setCredentials({ ...initialForm });
    setErrors({});
    setSubmitted(false);
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
          autoComplete="email"
          value={credentials.email}
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          autoComplete="current-password"
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
