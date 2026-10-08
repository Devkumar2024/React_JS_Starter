// src/data/profiles.ts
type ProfileProps = {
  name: string;
  birthYear: number;
  city: string;
  role: string;
  skills: string[];
};

export const profiles: ProfileProps[] = [
  {
    name: "Ananya Sharma",
    birthYear: 2002,
    city: "",
    role: "IAS Officer",
    skills: ["Public Admin", "Economics", "Hindi", "English"],
  },
  {
    name: "Dev K.",
    birthYear: 2003,
    city: "Bhikhiwind",
    role: "Jr. SE Intern",
    skills: ["TypeScript", "React", "NodeJS", "English"],
  },
  {
    name: "Rohan Mehta",
    birthYear: 1995,
    city: "Bengaluru",
    role: "",
    skills: ["Go", "Kubernetes", "PostgreSQL", "System Design"],
  },
  {
    name: "Priya Nair",
    birthYear: 1998,
    city: "Kochi",
    role: "Product Designer",
    skills: [],
  },
  {
    name: "Meera Iyer",
    birthYear: 1988,
    city: "Chennai",
    role: "",
    skills: ["Surgery", "Diagnostics", "Patient Care", "Tamil", "English"],
  },
  {
    name: "Kabir Khan",
    birthYear: 1992,
    city: "",
    role: "Freelance Photographer",
    skills: ["Lightroom", "Portraits", "Street Photography"],
  },
  {
    name: "Sneha Reddy",
    birthYear: 2000,
    city: "Hyderabad",
    role: "Data Analyst",
    skills: [],
  },
  {
    name: "Vikram Joshi",
    birthYear: 1979,
    city: "Pune",
    role: "Engineering Manager",
    skills: ["Leadership", "Java", "Hiring", "Mentoring"],
  },
  {
    name: "Aditi Bansal",
    birthYear: 2005,
    city: "Chandigarh",
    role: "Student",
    skills: ["Writing", "Debate", "Python"],
  },
  {
    name: "Rahul Verma",
    birthYear: 1997,
    city: "Lucknow",
    role: "Backend Developer",
    skills: ["NodeJS", "MongoDB", "Redis", "Docker"],
  },
  {
    name: "Ishita Ghosh",
    birthYear: 1993,
    city: "Kolkata",
    role: "Content Writer",
    skills: ["Copywriting", "SEO", "Bengali", "English"],
  },
  {
    name: "Siddharth Rao",
    birthYear: 2008,
    city: "Indore",
    role: "Student",
    skills: [],
  },

  {
    name: "Tanvi Desai",
    birthYear: 1991,
    city: "Surat",
    role: "UI Engineer",
    skills: ["Vue", "SCSS", "Accessibility", "Animation"],
  },
   {
    name: "Yash Agarwal",
    birthYear: 2012,
    city: "Shimla",
    role: "Student",
    skills: [],
  },

  {
    name: "Divya Menon",
    birthYear: 2004,
    city: "",
    role: "Intern",
    skills: ["Python", "Pandas", "Excel"],
  },
  {
    name: "Nisha Choudhary",
    birthYear: 1987,
    city: "Jodhpur",
    role: "HR Lead",
    skills: ["Recruiting", "L&D", "Payroll", "Conflict Resolution"],
  },
];
