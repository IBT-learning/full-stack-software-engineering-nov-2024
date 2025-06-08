import { useState } from "react";


function InputCard({setTaskList}){
  const [taskInput, setTaskInput] = useState('');


  const onAdd = () => {
    // you want to add the new task to the taskList array when you hit the add button 

     if (!taskInput.trim()) return;
     
    const newTask = {
      id: Date.now(),
      task: taskInput.trim(),
      completed: false,
    }
    
    setTaskList((prevTasks) => [...prevTasks, newTask]); // functional update
    setTaskInput('');
  }

  return (
    <header>
      <h1>To-do list</h1> 
      <input 
        type="text" 
        placeholder="Enter task ..." 
        name="task"
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button 
       type="submit" 
       className="add" 
       disabled={!(taskInput.trim())} 
       onClick={onAdd}
       >
        add
      </button>
    </header>
  )
}

export default InputCard;