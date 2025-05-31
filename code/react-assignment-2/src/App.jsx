import { useState } from "react";
import TaskList from "./components/TaskList";
import "./assets/css/style.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
    { id: 4, task: "build a todo list app", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        { id: tasks.length + 1, task: newTask, completed: false },
        ...tasks,
      ]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="app-container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
      </div>
    </>
  );
}

export default App;
