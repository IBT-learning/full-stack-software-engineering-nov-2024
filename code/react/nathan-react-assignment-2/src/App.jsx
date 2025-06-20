import React from "react";
import ToDoList from "./components/ToDoList";
const Todos = [
  {
    id: 1,
    item: "First To Do",
    isCompleted: true,
  },
  {
    id: 2,
    item: "Second To Do",
    isCompleted: false,
  },
  {
    id: 3,
    item: "Third  To Do",
    isCompleted: true,
  },
  {
    id: 4,
    item: "Fourth To Do",
    isCompleted: false,
  },
];
const App = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <ToDoList Todos={Todos} />
    </div>
  );
};

export default App;
