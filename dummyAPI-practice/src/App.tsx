import { ProductList } from "./components/ProductList";
import type { Product } from "./types";

const products: Product[] = [
  { id: 1, title: "Essence Mascara", price: 10, category: "beauty" },
  { id: 2, title: "Eyeshadow Palette", price: 35, category: "beauty" },
  { id: 3, title: "Powder Canister", price: 15, category: "beauty" },
  { id: 4, title: "Red Lipstick Matte", price: 18, category: "beauty" },
  { id: 5, title: "Hydrating Facial Cream", price: 25, category: "beauty" },
  { id: 6, title: "Smartphone Pro", price: 699, category: "smartphones" },
  { id: 7, title: "Budget Smartphone", price: 199, category: "smartphones" },
  { id: 8, title: "Foldable Smartphone", price: 999, category: "smartphones" },
  { id: 9, title: "Chanel Coco Noir", price: 120, category: "fragrances" },
  { id: 10, title: "Dior Sauvage", price: 110, category: "fragrances" },
  { id: 11, title: "Versace Eros", price: 95, category: "fragrances" },
  { id: 12, title: "Calvin Klein One", price: 45, category: "fragrances" },
  { id: 13, title: "Wireless Earbuds", price: 50, category: "electronics" },
  { id: 14, title: "Mechanical Keyboard", price: 85, category: "electronics" },
  { id: 15, title: "Gaming Laptop 15\"", price: 1200, category: "electronics" },
  { id: 16, title: "UltraWide Monitor", price: 350, category: "electronics" },
  { id: 17, title: "MacBook Air M2", price: 1099, category: "electronics" },
  { id: 18, title: "Ergonomic Office Chair", price: 220, category: "furniture" },
  { id: 19, title: "Standing Desk", price: 300, category: "furniture" },
  { id: 20, title: "Aromatherapy Diffuser", price: 30, category: "furniture" },
  { id: 21, title: "Smart LED Lamp", price: 25, category: "furniture" }
];

function App() {
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
export default App;
