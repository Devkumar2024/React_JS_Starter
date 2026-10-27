import React, { useState } from "react";

type AddItemFromProps = {
  onAdd: (item: string) => void;
};
export function AddItemForm({ onAdd }: AddItemFromProps) {
  const [name, setName] = useState<string>("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    // avoid reload on form submit
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    onAdd(trimmedName); // to parent
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Item....." />
      <button type="submit">Add</button>
    </form>
  );
}
