import React, { useState } from "react";
import { Button } from "../../ui/Button";

let nextId = 0;

interface Todos {
  id: number;
  name: string;
}

export function Todos() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [input, setInput] = useState<string>("");
  const [editId, setEditID] = useState<number | null>(null);
  const [editVal, setEditVal] = useState<string>("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleAdd() {
    const name = input.trim();
    if (!name) return;

    setTodos((prev) => [...prev, { id: nextId++, name }]);
    setInput("");
  }

  function handleDel(id: number) {
    setTodos((prev) => prev.filter((ele) => ele.id !== id));
  }

  function handleEdit(id: number, input: string) {
    setEditID(id);
    setEditVal(input);
  }

  function handleEditSave() {
    const name = editVal.trim();
    if(!name) return;
    setTodos((prev)=> prev.map((todo)=>(
        todo.id === editId?{...todo, name}: todo
    )));
    setEditID(null);
    setEditVal("")
  }

  function handleEditCancel(){
    setEditID(null);
    setEditVal("")
  }
  return (
    <>
      <h1>Todo list : {todos.length}</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input value={editVal} onChange={(e) => setEditVal(e.target.value)} />
                <Button onClick={handleEditSave}>✅</Button>
                <Button onClick={handleEditCancel}>❌</Button>
              </>
            ) : (
              <>
                {todo.name}
                <Button onClick={() => handleDel(todo.id)}>Delete</Button>
                <Button onClick={() => handleEdit(todo.id, todo.name)}>Edit</Button>
              </>
            )}
          </li>
        ))}
      </ul>

      <input value={input} onChange={handleInput} placeholder="Add toods..." />
      <Button onClick={handleAdd}>Add item</Button>
    </>
  );
}
