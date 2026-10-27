import { ProductList } from "./components/ProductList";
import type { Product } from "./types";

const products: Product[] = [
  { id: 1, title: "Essence Mascara", price: 10 },
  { id: 2, title: "Eyeshadow Palette", price: 20 },
  { id: 3, title: "Smartphone", price: 300 },
  { id: 4, title: "Powder Canister", price: 15 },
  { id: 5, title: "Gun Canister", price: 15000 },
  { id: 6, title: "Howarthy", price: 140 },
];

function App() {
  return (
    <main>
      <ProductList product={products} />
    </main>
  );
}
export default App;
