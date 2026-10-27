import type { Product } from "../types";
import "./css/component.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    // No need to assign key here
    <div className="productCard">
      <h5>{product.title}</h5>
      <p>{product.price}</p>
    </div>
  );
}
