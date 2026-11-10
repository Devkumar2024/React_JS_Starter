import { useState, useEffect } from "react";
type Task = {
  id: number;
  text: string;
};

export function LocalEffect() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("Task_list");

    // return savedTasks ? JSON.parse(savedTasks) : []
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("Task_list", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    if (!input.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text: input.trim(),
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  }

  return (
    <div>
      <h1>Tasks to be listed</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="add task" />
      <button onClick={handleAddTask}> Add task</button>

      <div>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </div>
    </div>
  );
}
