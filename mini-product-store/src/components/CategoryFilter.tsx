type CategoryFilterProps = {
  selectedCategory: string;
  onButtonToggle: (category: string) => void;
};

export function CategoryFilter({ selectedCategory, onButtonToggle }: CategoryFilterProps) {
  return (
    <div className="categoryFilter">
      <button className={selectedCategory === "all" ? "active" : ""} onClick={() => onButtonToggle("all")}>
        All
      </button>
      <button className={selectedCategory === "beauty" ? "active" : ""} onClick={() => onButtonToggle("beauty")}>
        Beauty
      </button>
      <button
        className={selectedCategory === "fragrances" ? "active" : ""}
        onClick={() => onButtonToggle("fragrances")}>
        Fragrances
      </button>
      <button className={selectedCategory === "furniture" ? "active" : ""} onClick={() => onButtonToggle("furniture")}>
        Furniture
      </button>
      <button className={selectedCategory === "groceries" ? "active" : ""} onClick={() => onButtonToggle("groceries")}>
        Groceries
      </button>
    </div>
  );
}
