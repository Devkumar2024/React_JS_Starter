import type { ReactNode } from "react";

interface ButtonPreops {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ onClick, children }: ButtonPreops) {
  //   onClick prop should be in native, children prop is rendered inside
  return <button onClick={onClick}>{children}</button>;
}
