import { useState } from 'react'
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import './App.css'


const initialTasks = [
  { id: 1, task: "make dinner", completed: true },
  { id: 2, task: "wash the dishes", completed: false },
  { id: 3, task: "finish homework", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: newTask.trim(),
      completed: false,
    };

    setTasks([newTodo, ...tasks]);
    setNewTask("");
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
    </>
  )
}

export default App
