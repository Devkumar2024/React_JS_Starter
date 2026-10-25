import "../assets/css/Components.css";
import type { Product } from "./../types/product";
import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [input, setInput] = useState<string>("");

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  const filteredProducts: Product[] = products?.filter((product) =>
    product.title.toLowerCase().includes(input.trim().toLowerCase()),
  );

  return (
    <div className="productListSection">
      <h5>Product List</h5>
      <input type="text" value={input} onChange={handleInputValue} placeholder="....enter items" />

      {!products || products.length === 0 ? (
        <p>Nothing here....</p>
      ) : filteredProducts.length === 0 ? (
        <p>Nothing here....</p>
      ) : (
        <div className="productList">
           {
            filteredProducts.map((ele)=>(
            < ProductCard key= {ele.id} product={ele}/>
            ))
           }
        </div>
      )}
    </div>
  );
}
