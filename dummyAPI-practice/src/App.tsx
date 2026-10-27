type Product = {
  id: number;
  title: string;
  price: number;
};
const products: Product[] = [
  { id: 1, title: "Essence Mascara", price: 10 },
  { id: 2, title: "Eyeshadow Palette", price: 20 },
  { id: 3, title: "Smartphone", price: 300 },
  { id: 4, title: "Powder Canister", price: 15 },
  { id: 5, title: "Gun Canister", price: 15000 },
];
function App() {
  return (
    <main>
      <h1>Products</h1>
      <div>
        {products.map((ele) => (
          <p key={ele.id}>
            {ele.title} - {ele.price}
          </p>
        ))}
      </div>
    </main>
  );
}
export default App;
