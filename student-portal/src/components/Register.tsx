import React, { useState } from "react";
import type { RegisterData } from "../types/types";
import { EMAIL_REGEX, ROLES, needsCompany } from "../utils/validation";

type RegisterProps = {
  users: RegisterData[];
  onSuccess: (user: RegisterData) => void;
  onSwitchToLogin: () => void;
};

// age input se string aati hai, confirmPassword sirf UI ka field hai
type RegisterFormState = Omit<RegisterData, "age"> & {
  age: string;
  confirmPassword: string;
};
type FormErrors = Partial<Record<keyof RegisterFormState, string>>;

const initialForm: RegisterFormState = {
  name: "",
  email: "",
  companyName: "",
  age: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export function Register({ users, onSuccess, onSwitchToLogin }: RegisterProps) {
  const [formData, setFormData] = useState<RegisterFormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

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
      if (!Number.isInteger(age) || age < 18 || age > 100)
        errs.age = "Age must be a whole number between 18 and 100";
    }

    if (!data.role) errs.role = "Please select a role";

    if (needsCompany(data.role) && !data.companyName.trim())
      errs.companyName = "Company name is required";

    if (!data.password) errs.password = "Password is required";
    else if (data.password.length < 8) errs.password = "Password must be at least 8 characters";

    if (!data.confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (data.confirmPassword !== data.password)
      errs.confirmPassword = "Passwords do not match";

    return errs;
  }

  function clearErrors(...fields: (keyof RegisterFormState)[]) {
    setErrors((prev) => {
      const next = { ...prev };
      fields.forEach((f) => delete next[f]);
      return next;
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.currentTarget;
    const field = name as keyof RegisterFormState;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // role badla toh companyName ka error bhi clear karo (Intern → no company)
    if (field === "role") clearErrors("role", "companyName");
    else clearErrors(field);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // confirmPassword UI-only hai — RegisterData mein nahi jaata
    const { confirmPassword, age, ...rest } = formData;
    onSuccess({ ...rest, age: Number(age) });
    setFormData({ ...initialForm });
  }

  return (
    <div>
      <h5>Register</h5>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name="name" value={formData.name} placeholder="Enter name" onChange={handleInputChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="number"
          step="1"
          name="age"
          value={formData.age}
          placeholder="Enter age"
          onChange={handleInputChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <select name="role" value={formData.role} onChange={handleInputChange}>
          <option value="">Select role</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.role && <p className="error">{errors.role}</p>}

        {needsCompany(formData.role) && (
          <>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              placeholder="Company name"
              onChange={handleInputChange}
            />
            {errors.companyName && <p className="error">{errors.companyName}</p>}
          </>
        )}

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
        <button type="button" onClick={onSwitchToLogin}>
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}