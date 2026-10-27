import type { Product } from "../types";
import "./css/component.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    // No need to assign key here
    <div className="productCard">
      <i>{product.category}</i>
      <img src={product.thumbnail} alt={product.title} loading="lazy" height="200" width="200" />
      <h5>
        {product.title}, {product.brand}
      </h5>
      <b>{product.price}</b>
      <p>{product.description}</p>
    </div>
  );
}
