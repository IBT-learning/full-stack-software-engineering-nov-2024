import { useState } from 'react'
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
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
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
