export type SignupInput = {
  name: string;
  age: number;
  email: string;
  company: string;
  password: string;
};

export type LoginInput = Pick<SignupInput, 'email' | 'password'>

// server sends back 
// export type User = {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   company: string;
// };

export type SignupInputErrors = {
  name?: string;
  age?: string;
  email?: string;
  company?: string;
  password?: string;
};

export type LoginInputErrors = Pick<SignupInputErrors, "email" | "password">;