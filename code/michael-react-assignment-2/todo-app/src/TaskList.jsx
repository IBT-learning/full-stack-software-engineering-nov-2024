function TaskList({ tasks, toggleCompleted, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? "completed" : ""}
          onClick={() => toggleCompleted(task.id)}
        >
          {task.task}
          <button
            className="delete"
            onClick={(e) => {
              e.stopPropagation();  // Prevent toggling when deleting
              deleteTask(task.id);
            }}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
