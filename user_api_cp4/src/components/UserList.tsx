import type { User } from "../types/type";
import { UserCard } from "./UserCard";
import React, { useState } from "react";
import "./component.css";

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  const [serachItem, setSearchItem] = useState<string>("");
  const [category, setcategory] = useState<string>("All");
  const [contactedIds, setcontactedIds] = useState<number[]>([]);

  const visibleProducts: User[] = users.filter((ele) => {
    const full_name = `${ele.firstName} ${ele.lastName}`;
    const serachUsers: boolean = full_name.toLowerCase().trim().includes(serachItem.toLowerCase().trim());
    const categoryFilter: boolean = category === "All" ? true : category === ele.company.department;

    return serachUsers && categoryFilter;
  });

  function handleToggler(id: number) {
    if (contactedIds.includes(id)) {
      setcontactedIds(contactedIds.filter((ele) => ele !== id));
    } else {
      setcontactedIds([...contactedIds, id]);
    }
  }

  function handleSerach(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchItem(e.currentTarget.value);
  }

  function handleButtonChange(name: string) {
    setcategory(name);
  }

  return (
    <div>
      <div className="dashboard">
        <h3>Total : {users.length}</h3>
        <h3>Contacted : {contactedIds.length}</h3>
        <h3>Remaining : {users.length - contactedIds.length}</h3>
      </div>
      <input type="text" value={serachItem} onChange={handleSerach} />

      <div className="filters">
        <button onClick={() => handleButtonChange("All")}>All</button>
        <button onClick={() => handleButtonChange("Sales")}>Sales</button>
        <button onClick={() => handleButtonChange("Product Management")}>Product Management</button>
        <button onClick={() => handleButtonChange("Legal")}>Legal</button>
        <button onClick={() => handleButtonChange("Services")}>Services</button>
        <button onClick={() => handleButtonChange("Marketing")}>Marketing</button>
        <button onClick={() => handleButtonChange("Training")}>Training</button>
        <button onClick={() => handleButtonChange("Research and Development")}>Research and Development</button>
        <button onClick={() => handleButtonChange("Engineering")}>Engineering</button>
        <button onClick={() => handleButtonChange("Support")}>Support</button>
        <button onClick={() => handleButtonChange("Human Resources")}>Human Resources</button>
        <button onClick={() => handleButtonChange("Accounting")}>Accounting</button>
      </div>


      {/* filter items */}
      <div className="userList">
        {!visibleProducts || visibleProducts.length === 0 ? (
          <h1>No product exists....</h1>
        ) : (
          visibleProducts.map((user) => (
            <UserCard key={user.id} user={user} isChecked={contactedIds.includes(user.id)} onToggle={handleToggler} />
          ))
        )}
      </div>
    </div>
  );
}
