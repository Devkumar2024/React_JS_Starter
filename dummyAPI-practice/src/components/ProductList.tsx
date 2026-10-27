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
  const [favIds, setFavIds] = useState<number[]>([]);
  const [favMode, setFavMode] = useState<boolean>(false);

  function handleCategory(category: string): void {
    setCategory(category);
  }

  const visibleProducts = products.filter((ele) => {
    const categoryMatch: boolean = category === "all" ? true : category === ele.category;
    const searchMatch: boolean = ele.title.toLowerCase().includes(serachedItem.trim().toLowerCase());
    const favMatch: boolean = favMode ? favIds.includes(ele.id) : true;

    return categoryMatch && searchMatch && favMatch;
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSerachItem(e.currentTarget.value);
  }

  function handleToggle(id: number) {
    // if includes remove id
    if (favIds.includes(id)) {
      setFavIds(favIds.filter((ele) => ele !== id));
    } else {
      setFavIds([...favIds, id]);
    }
  }
  function handleFavs() {
    setFavMode((prev) => !prev);
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
      <button style={{ backgroundColor: favMode ? "red" : "black" }} onClick={handleFavs}>
        Favourites
      </button>

      <div className="productList">
        {!products || products.length === 0 ? (
          <p>No Products Exsits</p>
        ) : (
          visibleProducts.map((ele) => (
            <ProductCard key={ele.id} product={ele} isChecked={favIds.includes(ele.id)} onToggle={handleToggle} />
          ))
        )}
      </div>
    </>
  );
}
