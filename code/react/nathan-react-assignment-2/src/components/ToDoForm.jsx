import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

const ToDoForm = ({add}) => {
  const [todo, setToDo] = useState("");

  const handleAddtoDo = (newTodoItem) => {
    add(newTodoItem);
    setToDo("");
  };


  return (
    <form className=" " onSubmit={(e)=>e.preventDefault()}>
      <h1 className="mt-10 text-2xl  font-bold text-center text-white my-10 ">
        Add a Todo
      </h1>
      <div className="flex gap-3 items-center">
        <div className="border border-white w-full rounded-md">
          <div className="flex gap-2 h-[3rem] px-4 items-center  ">
            <input
              value={todo}
              type="text"
              placeholder="Go on a 10 mile run...."
              className="text-white  h-full border-none bg-none  focus:outline-none"
              onChange={(e) => setToDo(e.target.value)}
            />
          </div>
        </div>
        <button onClick={()=>handleAddtoDo(todo)} className="h-[3rem] gap-2  flex items-center justify-center bg-violet-700 rounded-md text-white w-[7rem]">
          {" "}
          <IoAddCircle className="text-white text-2xl" />
          Add{" "}
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
