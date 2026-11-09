export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  company: { department: string; title: string };
  contacted?: boolean; // client-only field, we add it ourselves
};

export type UsersResponse = { users: Employee[]; total: number; skip: number; limit: number };
