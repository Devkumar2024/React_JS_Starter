// type.ts — Types for https://dummyjson.com/users

/** Geographic coordinates (latitude/longitude) */
export interface Coordinates {
  lat: number;
  lng: number;
}

/** Physical address used in both user and company records */
export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

/** User's hair color and type */
export interface Hair {
  color: string;
  type: string;
}

/** Bank account details */
export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

/** Company the user works for */
export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

/** Cryptocurrency wallet details */
export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

/** A single user object returned by the /users endpoint */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // ISO date string
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: "admin" | "moderator" | "user"; // documented roles
}

/** Paginated response for GET /users */
export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}