import type React from "react";

type SearchBarProps = {
  searchItem: string;
  //   we are making signature of setSerachItem in serachbar
  onSearchChange: (searchItem: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

export function SearchBar({ searchItem, onSearchChange, inputRef }: SearchBarProps) {
  return (
    <div className="serachBar">
      <input
        type="text"
        value={searchItem}
        ref={inputRef}
        placeholder="...place items"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
