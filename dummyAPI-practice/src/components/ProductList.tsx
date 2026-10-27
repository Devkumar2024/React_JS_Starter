import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import React, { useState } from "react";
import "./css/component.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  const [category, setCategory] = useState<string>("");
  const [filterMode, setFilterMode] = useState<boolean>(false);

  function handleCategory(category: string): void {
    setFilterMode(true);
    setCategory(category);
  }

  const filteredByCategory = products.filter((ele) => category === ele.category);

  function allMode() {
    setFilterMode(false);
  }

  return (
    <>
      <button onClick={allMode}>All</button>
      <button onClick={() => handleCategory("beauty")}>beauty</button>
      <button onClick={() => handleCategory("fragrances")}>fragrances</button>
      <button onClick={() => handleCategory("furniture")}>furniture</button>
      <button onClick={() => handleCategory("groceries")}>groceries</button>

      <div className="productList">
        {!products || products.length === 0 ? (
          <p>No Products Exsits</p>
        ) : filterMode ? (
          filteredByCategory.map((ele) => <ProductCard key={ele.id} product={ele} />)
        ) : (
          products.map((ele) => <ProductCard key={ele.id} product={ele} />)
        )}
      </div>
    </>
  );
}
