import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

import "./component.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <div className="productList">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
