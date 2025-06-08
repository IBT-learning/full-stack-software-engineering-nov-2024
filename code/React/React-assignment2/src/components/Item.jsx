import { useState } from "react";

function Item({task, toggleComplete}){
  
  return(
    <li className={`task-item ${task.completed ? 'completed': ''}`}>
      <button className="complete-btn" onClick={() => toggleComplete(task.id)}> 
        {task.completed ? '✓' : ''}
      </button>
      <span className="task-text">
        {task.task}
      </span>
    </li>
  )
}

export default Item;