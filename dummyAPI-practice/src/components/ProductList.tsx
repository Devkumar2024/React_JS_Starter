import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import React, { useState } from "react";
import "./css/component.css";

type ProductListProps = {
  products: Product[];
  isLoading?: false;
};

export function ProductList({ products, isLoading = false }: ProductListProps) {
  const [category, setCategory] = useState<string>("");
  const [filterMode, setFilterMode] = useState<boolean>(false);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

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
      <button onClick={() => handleCategory("smartphones")}>smartphones</button>
      <button onClick={() => handleCategory("fragrances")}>fragrances</button>
      <button onClick={() => handleCategory("electronics")}>electronics</button>
      <button onClick={() => handleCategory("furniture")}>furniture</button>

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
