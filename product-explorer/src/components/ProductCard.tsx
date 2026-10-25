import type { Product } from "../types/product";
import "../assets/css/Components.css";

// Define the contract first
interface productCardProps {
  product: Product;
  ischecked: boolean;
  onToggle: (id: number) => void;
}

// Accept that interface in your component's parameter list
export function ProductCard({ product, ischecked, onToggle }: productCardProps) {
  const { id, title, price, category, stock, thumbnail, description } = product;

  return (
    <>
      <div className="productItem">
        <input type="checkbox" checked={ischecked} onChange={() => onToggle(product.id)} />
        <p>id : {id}</p>
        <p>title : {title}</p>
        <p>price : {price}</p>
        <p>category : {category}</p>
        <p>stock : {stock}</p>
        <img src={thumbnail} alt="Thumbanil" />
        <p>description : {description}</p>
      </div>
    </>
  );
}
