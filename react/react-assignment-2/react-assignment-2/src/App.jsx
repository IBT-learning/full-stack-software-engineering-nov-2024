import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [isCompleted, setIsCompleted] = useState(true);
  const [allTasks, setAllTasks] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
  ]);

  function toggleTask() {
    const allData = allTasks;

    const isExist = allData.find((com) => com.task === task);

    if (task.length < 4) {
      console.log("Please enter a valid task");
    } else if (isExist) {
      console.log("task exists");
    } else {
      const newData = {
        task,
        completed: false,
        id: 30,
      };
      setAllTasks((prev) => [...prev, newData]);
    }
  }

  function handleToggleStatus(name) {
    const updatedTasks = allTasks.map((task) => {
      if (task.task === name) {
        const updatedTask = { ...task, completed: !task.completed };
        setIsCompleted(updatedTask.completed); // update isCompleted
        return updatedTask;
      }
      return task;
    });

    setAllTasks(updatedTasks);
  }

  return (
    <div className="container">
      <div className="screen-title">
        <h1 className="title-text1">T</h1>
        <h1 className="title-text2">0</h1>
        <h1 className="title-text3">D</h1>
        <h1 className="title-text4">0</h1>
      </div>
      <div className="body">
        {allTasks.map((task, index) => (
          <div key={index.toString()} className="task-item">
            <li className={`task-text ${task.completed ? "completed" : ""}`}>
              {task.task}
            </li>
            <button
              className="button"
              onClick={() => handleToggleStatus(task.task)}
            >
              Change Status
            </button>
          </div>
        ))}
      </div>
      <form
        className="footer"
        onSubmit={(e) => {
          e.preventDefault();
          toggleTask();
        }}
      >
        <input
          className="task-input"
          inputMode={"text"}
          placeholder="Enter new To do"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="button add-button">Add</button>
      </form>
    </div>
  );
}

export default App;
