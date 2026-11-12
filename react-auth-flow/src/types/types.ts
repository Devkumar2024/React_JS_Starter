export type SignUpFormDetails = {
  name: string;
  age: string;
  contact: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type LoginFormDetails = {
  contact ?: string;
  email: string;
  password: string;
};


export type LoginFormErrors = Partial<Record<keyof LoginFormDetails, string | null>>;
export type SignUPFormErrors = Partial<Record<keyof SignUpFormDetails, string | null>>;

export type User = { email: string, name ?: string,  contact ?: string };

export type StoredUser = {
  name: string;
  email: string;
  password: string;
  age: string;
  contact: string;
};