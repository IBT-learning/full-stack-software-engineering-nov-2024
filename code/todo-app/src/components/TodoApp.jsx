import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  // Initial test data
  const [tasks, setTasks] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
  ])

  const [inputValue, setInputValue] = useState("")

  // Generate unique ID for new tasks
  const generateId = () => {
    return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
  }

  // Add new task
  const addTask = (e) => {
    e.preventDefault()
    if (inputValue.trim() === "") return

    const newTask = {
      id: generateId(),
      task: inputValue.trim(),
      completed: false
    }

    setTasks([...tasks, newTask])
    setInputValue("")
  }

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Calculate statistics
  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length

  return (
    <div className="todo-app">
      <div className="todo-container">
        <header className="todo-header">
          <h1>My To-Do List</h1>
          <p className="task-stats">
            {completedCount} of {totalCount} tasks completed
          </p>
        </header>

        <form onSubmit={addTask} className="add-task-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks yet! Add one above.</p>
          ) : (
            tasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="task-checkbox"
                  />
                  <span className="task-text">{task.task}</span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-button"
                  title="Delete task"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {tasks.length > 0 && (
          <div className="task-summary">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${(completedCount / totalCount) * 100}%`}}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp