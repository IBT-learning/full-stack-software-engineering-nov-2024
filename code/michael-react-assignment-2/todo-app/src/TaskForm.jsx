function TaskForm({ newTask, setNewTask, handleAddTask }) {
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
