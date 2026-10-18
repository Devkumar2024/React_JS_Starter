import type { ReactNode } from "react";
// Used to define type of something

interface ButtonPreops {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ onClick, children }: ButtonPreops) {
  return <button onClick={onClick}>{children}</button>;
}
