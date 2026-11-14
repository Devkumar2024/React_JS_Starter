import { useEffect, useState } from "react";
import type { Product } from "./types/product";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [retry, setRetry] = useState<number>(0);
  const [serachItem, setSerachItem] = useState<string>("");

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
 
  const filteredProducts : Product [] = products.filter((product)=>{
    // === not incl. coz of strict filtering
      const serachFilter : boolean = product.title.toLowerCase().includes(serachItem.toLowerCase().trim()) ? true : false;

      return serachFilter;
  })


  return (
    <div className="appContainer">
      <h1>Product List</h1>
      {/* we are making signature of setSerachItem in serachbar */}
      <SearchBar searchItem ={serachItem} onSearchChange={setSerachItem}/>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
