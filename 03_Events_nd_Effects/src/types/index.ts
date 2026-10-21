// interface is specifically designed for object shapes and can be easily "extended" or merged.
export interface Profile{
    name : string,
    city : string,
    role : string,
    birthYear : number,
}

export interface Skill {
    id : number,
    name : string,
}

export interface Session {
  id: number;
  subject: string;
  time: string;
}