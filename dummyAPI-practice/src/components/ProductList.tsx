import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import "./css/component.css";

type ProductListProps = {
  products: Product[];
  isLoading ?: false;
};

export function ProductList({ products,isLoading = false }: ProductListProps) {
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="productList">
      {!products || products.length === 0 ? (
        <p>No Products Exsits</p>
      ) : (
        products.map((ele) => <ProductCard key={ele.id} product={ele} />)
      )}
    </div>
  );
}
