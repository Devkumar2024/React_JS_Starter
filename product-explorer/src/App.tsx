import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { products } from "./types/product";

function App() {
  return (
    <div>
      <Header />
      {/* explicitly maps the variable to the prop name */}
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
