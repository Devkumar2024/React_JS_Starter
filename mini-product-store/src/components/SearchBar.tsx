type SearchBarProps = {
  searchItem: string;
  //   we are making signature of setSerachItem in serachbar
  onSearchChange: (searchItem: string) => void;
};

export function SearchBar({ searchItem, onSearchChange }: SearchBarProps) {
  return (
    <div className="serachBar">
      <input
        type="text"
        value={searchItem}
        placeholder="...place items"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
