import { useState } from "react";
import "./App.css";

function App() {
  // initial tasks
  const [tasks, setTasks] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle complete/undo
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>

      {/* Input form */}
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Tasks list */}
      <ul className="todo-list">
        {tasks.map((t) => (
          <li
            key={t.id}
            className={t.completed ? "completed" : ""}
          >
            <span onClick={() => toggleTask(t.id)}>{t.task}</span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

