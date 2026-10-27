import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import React, { useState } from "react";
import "./css/component.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  const [category, setCategory] = useState<string>("all");
  const [serachedItem, setSerachItem] = useState<string>("");

  function handleCategory(category: string): void {
    setCategory(category);
  }

  const filteredByCategory = products.filter((ele) => {
    const categoryMatch = category === "all" ? true : category === ele.category;
    const searchMatch = ele.title.toLowerCase().includes(serachedItem.trim().toLowerCase());

    return categoryMatch && searchMatch;
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSerachItem(e.currentTarget.value);
  }

  return (
    <>
      <input type="text" placeholder="... serach items" value={serachedItem} onChange={handleChange} />
      <br />

      <button onClick={() => handleCategory("all")}>All</button>
      <button onClick={() => handleCategory("beauty")}>beauty</button>
      <button onClick={() => handleCategory("fragrances")}>fragrances</button>
      <button onClick={() => handleCategory("furniture")}>furniture</button>
      <button onClick={() => handleCategory("groceries")}>groceries</button>

      <div className="productList">
        {!products || products.length === 0 ? (
          <p>No Products Exsits</p>
        ) : (
          filteredByCategory.map((ele) => <ProductCard key={ele.id} product={ele} />)
        )}
      </div>
    </>
  );
}
