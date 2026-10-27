import { ProductList } from "./components/ProductList";
import type { Product } from "./types";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getApiData() {
      const urlResponse = await fetch("https://dummyjson.com/products");
      const data = await urlResponse.json();
      setProducts(data.products);
      setIsLoading(false);
    }
    getApiData();
  }, []);

  if (isLoading) {
   return <p>Loading.....</p>;
  }

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
export default App;
