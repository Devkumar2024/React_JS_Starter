export type SignUpFormDetails = {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormDetails = Pick<SignUpFormDetails, "email" | "password">;
export type LoginFormErrors = Partial<Record<keyof LoginFormDetails, string | null>>;
export type SignUPFormErrors = Partial<Record<keyof SignUpFormDetails, string | null>>;

export type User = { email: string, name ?: string };

export type StoredUser = {
  name: string;
  email: string;
  password: string;
  age: string;
};