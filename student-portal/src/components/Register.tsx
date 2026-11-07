import React, { useState } from "react";
import type { RegisterData } from "../types/types";
import { EMAIL_REGEX, ROLES } from "../utils/validation";

type RegisterProps = {
  users: RegisterData[];
  onSuccess: (user: RegisterData) => void;
  onSwitchToLogin: () => void;
};

type RegisterFormState = Omit<RegisterData, "age"> & {
  age: string;
  confirmPassword: string;
};
type FormErrors = Partial<Record<keyof RegisterFormState, string>>;

const initialForm: RegisterFormState = {
  name: "",
  email: "",
  age: "",
  role: "",
  companyName: "",
  password: "",
  confirmPassword: "",
};

export function Register({ users, onSuccess, onSwitchToLogin }: RegisterProps) {
  const [formData, setFormData] = useState<RegisterFormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data: RegisterFormState): FormErrors {
    const errs: FormErrors = {};

    if (!data.name.trim()) errs.name = "Name is required";
    else if (data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!data.email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(data.email)) errs.email = "Enter a valid email";
    else if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase()))
      errs.email = "Email already registered";

    if (!data.age) errs.age = "Age is required";
    else {
      const age = Number(data.age);
      if (!Number.isInteger(age) || age < 18 || age > 100) errs.age = "Age must be a whole number between 18 and 100";
    }

    if (!data.role) errs.role = "Please select a role";
    if (!data.companyName.trim()) errs.companyName = "Company name is required";

    if (!data.password) errs.password = "Password is required";
    else if (data.password.length < 8) errs.password = "Password must be at least 8 characters";

    if (!data.confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (data.confirmPassword !== data.password) errs.confirmPassword = "Passwords do not match";

    return errs;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.currentTarget;
    const field = name as keyof RegisterFormState;
    const nextData = { ...formData, [field]: value };
    setFormData(nextData);

    if (submitted) {
      const fieldError = validate(nextData)[field];
      setErrors((prev) => {
        const next = { ...prev };
        if (fieldError) next[field] = fieldError;
        else delete next[field];
        return next;
      });
    } else {
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    const { confirmPassword, age, ...rest } = formData;
    onSuccess({
      ...rest,
      name: rest.name.trim(),
      email: rest.email.trim().toLowerCase(),
      companyName: rest.companyName.trim(),
      age: Number(age),
    });

    setFormData({ ...initialForm });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <div className="authCard">
      <h2>Create your account</h2>
      <p className="authSubtitle">Takes less than a minute</p>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          placeholder="Full name"
          aria-invalid={!!errors.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          placeholder="Email address"
          aria-invalid={!!errors.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="number"
          step="1"
          inputMode="numeric"
          min={18}
          max={100}
          name="age"
          value={formData.age}
          placeholder="Age"
          aria-invalid={!!errors.age}
          onChange={handleInputChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <select name="role" value={formData.role} aria-invalid={!!errors.role} onChange={handleInputChange}>
          <option value="">Select role</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.role && <p className="error">{errors.role}</p>}

        <input
          type="text"
          name="companyName"
          autoComplete="organization"
          value={formData.companyName}
          placeholder="Company name"
          aria-invalid={!!errors.companyName}
          onChange={handleInputChange}
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}

        <input
          type="password"
          name="password"
          autoComplete="new-password"
          value={formData.password}
          placeholder="Password (min 8 characters)"
          aria-invalid={!!errors.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          aria-invalid={!!errors.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Create account</button>
        <button type="button" onClick={onSwitchToLogin}>
          Already have an account? Sign in
        </button>
      </form>
    </div>
  );
}
