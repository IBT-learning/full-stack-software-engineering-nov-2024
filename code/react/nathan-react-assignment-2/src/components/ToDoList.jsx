import SearchInput from "./SearchInput";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoList = ({ Todos }) => {
  const [todos, setTodos] = useState(Todos);

  const handleToggleToDoItem = (id) => {
    setTodos((prevState) => {
      return prevState.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      );
    });
  };

  const handleAddTodo = (newToDoItem) => {
    setTodos((prevState) => [
      ...prevState,
      { id: prevState.length + 1, item: newToDoItem, isCompleted: false },
    ]);
  };

  const handleFilterTodos = (searchTerm) => {

    console.log("Search term: ", searchTerm);
    
    if (searchTerm) {
      const filteredTodos = todos.filter((todoItem) =>
        todoItem.item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTodos(filteredTodos);
    } else {
      setTodos(Todos);
    }

  };

  return (
    <div className=" border border-white w-full max-w-[50rem] h-screen">

      <h1 className="mt-10 text-2xl  font-bold text-center text-white my-10 ">
        TODO LIST
      </h1>

      <div className="w-full max-w-[30rem] mx-auto flex flex-col gap-10">
        <SearchInput handleFilter={handleFilterTodos} />

        <ul className="  w-full  ">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="flex gap-2  items-center cursor-pointer"
                onClick={() => handleToggleToDoItem(todo.id)}
              >
                <input
                  id="todoItem"
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => {}}
                  className="cursor-pointer w-5 h-5 my-2 rounded border border-purple-400 appearance-none checked:bg-purple-500 checked:border-purple-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:justify-center checked:after:items-center"
                />

                <div
                  key={todo.id}
                  htmlFor="todoItem"
                  className={`text-white text-xl ${
                    todo.isCompleted && "line-through"
                  }`}
                >
                  {todo.item}
                </div>
              </div>
            );
          })}
        </ul>

        <ToDoForm add={handleAddTodo} />
      </div>
    </div>
  );
};

export default ToDoList;
