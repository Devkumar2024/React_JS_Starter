import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import './css/component.css';

type ProductListProps = {
  product: Product[];
};

export function ProductList({ product }: ProductListProps) {
  return (
    <div className="productList">
      {product.map((ele) => (
        <ProductCard key = {ele.id} product={ele} />
      ))}
    </div>
  );
}
