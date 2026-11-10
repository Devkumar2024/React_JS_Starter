import { useState, useEffect } from "react";
import type { Product } from "../types/employee";
import "./component.css";

export function DummyAPI() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<boolean|null>(false);
  const [retry, setRetry] = useState<number>(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        setIsloading(true);
        setError(false);
        return resp.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsloading(false);
      });
  }, [retry]);

  if (isloading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  function handleRetry() {
    setRetry((prev) => prev + 1);
    console.log(retry);
  }

  return (
    <div>
      <h1>DummyJSON products</h1>
      <div className="dummyAPI">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <img src={product.thumbnail} alt="prodIMG" />
            <h5>{product.title}</h5>
            <p>Price : {product.price}$</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
