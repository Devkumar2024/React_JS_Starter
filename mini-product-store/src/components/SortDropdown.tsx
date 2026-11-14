type SortDropdownProps = {
  onDropdownSelect: (val: string) => void;
};

export function SortDropdown({ onDropdownSelect }: SortDropdownProps) {
  return (
    <div className="sortItems">
      <select name="sort_by_price" onChange={(e) => onDropdownSelect(e.target.value)}>
        <option value="default">Default</option>
        <option value="lowHigh">Low to High Price</option>
        <option value="highLow">High to Low Price</option>
      </select>
    </div>
  );
}
