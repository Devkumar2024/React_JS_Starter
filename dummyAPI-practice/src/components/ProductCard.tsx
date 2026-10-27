import type { Product } from "../types";
import "./css/component.css";

type ProductCardProps = {
  product: Product;
  // ischecked khi store nhi ho raha hai, iska kaam bss render trigger karana hai
  isChecked?: boolean;
  onToggle?: (id: number) => void;
};

export function ProductCard({ product, isChecked = false, onToggle }: ProductCardProps) {
  const { id, title, price, category, brand, thumbnail, description } = product;
  
  return (
    // No need to assign key here
    <div className="productCard">
      ❤️
      <input type="checkbox" checked={isChecked} onChange={() => onToggle?.(id)} />
      <br />
      <i>{category}</i>
      <img src={thumbnail} alt={title} loading="lazy" height="200" width="200" />
      <h5>
        {title}, {brand}
      </h5>
      <b>{price} $</b>
      <p>{description}</p>
    </div>
  );
}
