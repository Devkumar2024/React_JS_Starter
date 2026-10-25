import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import "../assets/css/Components.css";

// Define the contract first
interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="productList">
      <h5>This is product card : </h5>
      {!products || products.length === 0 ? (
        <p>No elements here</p>
      ) : (
        products?.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
}
