import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick ?: () => void;
  type?: "button" | "submit";
}

export default function Button({ onClick, children, type = "button" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
