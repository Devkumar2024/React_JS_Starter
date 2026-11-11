export type SignupInput = {
  name: string;
  age: number;
  email: string;
  company: string;
  password: string;
};

export type LoginInput = Pick<SignupInput, 'email' | 'password'>

export type SignupInputErrors = {
  name?: string;
  age?: string;
  email?: string;
  company?: string;
  password?: string;
};

export type LoginInputErrors = Pick<SignupInputErrors, "email" | "password">;