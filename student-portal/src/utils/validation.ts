export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ROLES = ["Intern", "Jr SDE", "SDE", "Manager", "CEO"] as const;
export type Role = (typeof ROLES)[number];

// Intern ko company nahi chahiye
export const needsCompany = (role: string) => role !== "" && role !== "Intern";