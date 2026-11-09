import React,{ useState } from "react";

type Department = "Engineering" | "Design" | "HR" | "Sales";

type Person = {
  id: number;
  name: string;
  department: Department;
  contacted: boolean;
};

const INITIAL: Person[] = [
  { id: 1, name: "Ava Patel", department: "Engineering", contacted: false },
  { id: 2, name: "Noah Kim", department: "Design", contacted: true },
  { id: 3, name: "Mia Garcia", department: "HR", contacted: false },
  { id: 4, name: "Liam Okafor", department: "Engineering", contacted: true },
  { id: 5, name: "Sophia Rossi", department: "Sales", contacted: false },
  { id: 6, name: "Ethan Wright", department: "Design", contacted: false },
  { id: 7, name: "Zoya Sharma", department: "Engineering", contacted: true },
  { id: 8, name: "Lucas Vance", department: "HR", contacted: true },
  { id: 9, name: "Chloe Bennett", department: "Sales", contacted: true },
  { id: 10, name: "Aarav Mehta", department: "Engineering", contacted: false },
];

export function Roaster() {
  const [people, setPeople] = useState<Person[]>(INITIAL);

  // Naye person ke liye states
  const [newName, setNewName] = useState("");
  const [newDept, setNewDept] = useState<Department>("Engineering");

  const contracted = people.filter((ele) => ele.contacted === true);
  const perDeptCount = people.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.department] = (acc[curr.department] ?? 0) + 1;
    return acc;
  }, {});

  // Add person handler
  function handleAddPerson(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newName.trim()) return;

    const newPerson: Person = {
      id: Date.now(), // Unique ID ke liye timestamp
      name: newName.trim(),
      department: newDept,
      contacted: false, // Default uncontacted
    };

    setPeople((prev) => [newPerson, ...prev]); // Naye person ko list mein sabse upar add karega
    setNewName(""); // Input clear karne ke liye
  }

  function handleCardDelete(id: number) {
    setPeople((prev) => prev.filter((ele) => ele.id !== id));
  }

  function handleContract(id: number) {
    setPeople((prev) => prev.map((ele) => (ele.id === id ? { ...ele, contacted: !ele.contacted } : ele)));
  }

  function handleDeptChange(id: number, e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value as Department;
    setPeople((prev) => prev.map((ele) => (ele.id === id ? { ...ele, department: val } : ele)));
  }

  return (
    <div>
      <h1>Total people list : {people.length}</h1>
      <h2>Contracted : {contracted.length}</h2>
      <div>
        {Object.entries(perDeptCount).map(([dept, count]) => (
          <span key={dept}>
            {dept} : {count} <br />
          </span>
        ))}
      </div>

      {/* Add Person Form */}
      <form onSubmit={handleAddPerson} style={{ margin: "1rem 0", display: "flex", gap: "0.5rem" }}>
        <input type="text" placeholder="Enter name..." value={newName} onChange={(e) => setNewName(e.target.value)} />
        <select value={newDept} onChange={(e) => setNewDept(e.target.value as Department)}>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
        </select>
        <button type="submit">Add Person</button>
      </form>

      <div className="roaster">
        {people.map((ele) => (
          <div className="peopleCard" key={ele.id}>
            <p>
              <strong>Name : </strong>
              {ele.name}
            </p>
            <p>
              <strong>Department : </strong>
              {ele.department}
            </p>
            <select value={ele.department} onChange={(e) => handleDeptChange(ele.id, e)}>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="HR">HR</option>
              <option value="Sales">Sales</option>
            </select>
            <p>
              <strong>Contracted : </strong>
              {ele.contacted ? "Yes" : "No"}
            </p>
            <input type="checkbox" checked={ele.contacted} onChange={() => handleContract(ele.id)} />
            <button onClick={() => handleCardDelete(ele.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
