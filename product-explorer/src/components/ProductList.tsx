import "../assets/css/Components.css";
import type { Product } from "./../types/product";
import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [input, setInput] = useState<string>("");
  const [favIds, setFavIds] = useState<number[]>([]);
  const [favmode, setFavmode] = useState<boolean>(false);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  const filteredProducts: Product[] = products?.filter((product) =>
    product.title.toLowerCase().includes(input.trim().toLowerCase()),
  );
  const favProducts: Product[] = products?.filter((product) => favIds.includes(product.id));

  function handleToggle(id: number) {
    // if includes remove id
    if (favIds.includes(id)) {
      setFavIds(favIds.filter((ele) => ele !== id));
    } else {
      setFavIds([...favIds, id]);
    }
  }

  function handleFavOutput() {
    setFavmode((prev) => !prev);
  }

  return (
    <div className="productListSection">
      <h5>Product List</h5>
      <input type="text" value={input} onChange={handleInputValue} placeholder="....enter items" />
      <button onClick={handleFavOutput}>Show favourite items</button>

      {!products || products.length === 0 ? (
        <p>Nothing here....</p>
      ) : favmode ? (
        <div className="productList">
          {favProducts.map((ele) => (
            <ProductCard key={ele.id} product={ele} ischecked={favIds.includes(ele.id)} onToggle={handleToggle} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <p>Nothing here....</p>
      ) : (
        <div className="productList">
          {filteredProducts.map((ele) => (
            <ProductCard key={ele.id} product={ele} ischecked={favIds.includes(ele.id)} onToggle={handleToggle} />
          ))}
        </div>
      )}
    </div>
  );
}
