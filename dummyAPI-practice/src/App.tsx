import { ProductList } from "./components/ProductList";
import { ProfileEditor } from "./components/ProfileEditor";
import { Cart} from "./components/Cart";
import type { Profile, Product } from "./types";
import { useState, useEffect } from "react";

function App() {
  const [profile, setProfile] = useState<Profile>({
    name: "Dev kumar",
    role: "Intern",
    notificationsEnabled: false,
  });
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getApiData() {
      const urlResponse = await fetch("https://dummyjson.com/products");
      const data = await urlResponse.json();
      setProducts(data.products);
      setIsLoading(false);
    }
    getApiData();
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  function handleNameChange(name: string) {
    setProfile((prev) => ({ ...prev, name }));
  }

  function handleRoleChange(role: string) {
    setProfile((prev) => ({ ...prev, role }));
  }

  function handleNotificationChange() {
    setProfile((prev) => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }));
  }

  function handleIncrease(){
    setQuantity(prev=>prev+1)
  }

  function handleDecrease(){
    setQuantity(prev=>(Math.max(1, prev-1)))
  }

  return (
    <main>
      <ProfileEditor
        profile={profile}
        onNameChange={handleNameChange}
        onRoleChange={handleRoleChange}
        onToggleNotifications={handleNotificationChange}
      />
      <Cart quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      />
      <ProductList products={products} />
    </main>
  );
}
export default App;
