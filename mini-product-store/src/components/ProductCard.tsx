import type { Product } from "../types/product";
import './component.css'

type ProductCardProps = {
  product: Product;
  key: number;
};

export function ProductCard({ product }: ProductCardProps) {
  const { title, description, price, category, thumbnail } = product;
  return (
    <div>
      <div className="productCard">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>
          <b>{category}</b>
        </p>
        <p className="price">Price : {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
