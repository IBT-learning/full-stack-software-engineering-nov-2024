import { useState } from "react";

function Item({task, toggleComplete, deleteTask}){
  
  return(
    <li className={`task-item ${task.completed ? 'completed': ''}`}>
      <button className="complete-btn" onClick={() => toggleComplete(task.id)}> 
        {task.completed ? '✓' : ''}
      </button>
      <span className="task-text">
        {task.task}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        🗑
      </button>
    </li>
  )
}

export default Item;