const Task = ({ task, onToggleComplete }) => {
  return (
    <>
      <div
        className={`task ${task.completed ? "completed" : ""}`}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.task}
      </div>
    </>
  );
};

export default Task;
