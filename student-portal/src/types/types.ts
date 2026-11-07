export type View = "register" | "login" | "dashboard";

export type RegisterData = {
  name: string;
  email: string;
  companyName: string;
  age: number;
  password: string;
  role: string;
};