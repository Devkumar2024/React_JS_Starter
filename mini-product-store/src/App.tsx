import { useEffect, useState, useRef } from "react";
import type { Product } from "./types/product";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import { CategoryFilter } from "./components/CategoryFilter";
import { SortDropdown } from "./components/SortDropdown";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [retry, setRetry] = useState<number>(0);
  // giving dom ka reference
  const listTopRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [serachItem, setSerachItem] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setIsError(false);
      try {
        const apiResponse = await fetch(`https://dummyjson.com/products`);
        const data = await apiResponse.json();
        if (!apiResponse.ok) {
          setIsError(true);
          throw new Error(`Not able to fetch`);
        }
        setIsLoading(false);
        setIsError(false);
        setProducts(data.products);
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    }
    loadProducts();
  }, [retry]);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (isError) {
    return (
      <div>
        <h1>Error... </h1>
        <button onClick={() => setRetry((prev) => prev + 1)}>Retry</button>
      </div>
    );
  }



  const filteredProducts: Product[] = products.filter((product) => {
    // === not incl. coz of strict filtering
    const serachFilter: boolean = product.title.toLowerCase().includes(serachItem.toLowerCase().trim()) ? true : false;
    const categoryFilter: boolean = category === "all" ? true : category === product.category ? true : false;

    return serachFilter && categoryFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowHigh") return a.price - b.price;
    if (sortOrder === "highLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="appContainer">
      <h1 ref={listTopRef}>Product List</h1>
      {/* we are making signature of setSerachItem in serachbar */}
      <SearchBar searchItem={serachItem} inputRef={searchInputRef} onSearchChange={setSerachItem} />
      <button onClick={() => searchInputRef.current?.focus()}>Focus</button>
      <CategoryFilter selectedCategory={category} onButtonToggle={setCategory} />
      <SortDropdown onDropdownSelect={setSortOrder} />
      {sortedProducts.length === 0 ? <h3>No prdoucts...</h3> : <ProductList products={sortedProducts} />}
      <button onClick={() => listTopRef.current?.scrollIntoView({ behavior: "smooth" })}>Back to Top</button>
    </div>
  );
}

export default App;
