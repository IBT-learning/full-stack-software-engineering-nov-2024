import { useState } from "react";
import "../index.css";


export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      task: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTask]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""}
          >
            <span onClick={() => toggleCompleted(todo.id)}>
              {todo.task}
            </span>
            <button onClick={() => deleteTask(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
