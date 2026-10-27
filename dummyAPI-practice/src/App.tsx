import { ProductList } from "./components/ProductList";
import { ProfileEditor } from "./components/ProfileEditor";
import { AddItemForm } from "./components/AddItemForm";
import { Cart } from "./components/Cart";
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
  const [hasError, setHasError] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    async function getApiData() {
      try {
        const urlResponse = await fetch("https://dummyjson.com/products");

        if (!urlResponse.ok) {
          setHasError(true);
          setIsLoading(false);
          return;
        }

        const data = await urlResponse.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    }
    getApiData();
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (hasError) {
    return <p>Something went wrong. Please try again.</p>;
  }

  function handleNameChange(name: string) {
    setProfile({ ...profile, name: name });
  }

  function handleRoleChange(role: string) {
    setProfile({ ...profile, role: role });
  }

  function handleNotificationChange() {
    setProfile({ ...profile, notificationsEnabled: !profile.notificationsEnabled });
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddItem(newItem: string) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <ProfileEditor
        profile={profile}
        onNameChange={handleNameChange}
        onRoleChange={handleRoleChange}
        onToggleNotifications={handleNotificationChange}
      />
      <Cart quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
      <AddItemForm onAdd={handleAddItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ProductList products={products} />
    </main>
  );
}
export default App;