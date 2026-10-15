export interface Profile {
  Name: string;
  Age : number;
  Current_company: string;
  City: string;
  Role: string;
  Skills : string[];
}

export interface Skill {
  id: number;
  name: string;
}