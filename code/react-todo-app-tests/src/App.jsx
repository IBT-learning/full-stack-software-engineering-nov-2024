import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    
    if (trimmedValue) {
      const newTask = {
        id: Date.now(),
        task: trimmedValue,
        completed: false
      }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask(e)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To-Do App</h1>
        
        <form onSubmit={addTask} data-testid="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a new task..."
            data-testid="todo-input"
            className="todo-input"
          />
          <button 
            type="submit" 
            data-testid="add-button"
            className="add-button"
          >
            Add Task
          </button>
        </form>

        <div className="task-list" data-testid="task-list">
          {tasks.length === 0 ? (
            <p data-testid="empty-message" className="empty-message">
              No tasks yet. Add one above!
            </p>
          ) : (
            <ul data-testid="tasks-container">
              {tasks.map(task => (
                <li 
                  key={task.id} 
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                  data-testid={`task-item-${task.id}`}
                >
                  <span 
                    className="task-text"
                    data-testid={`task-text-${task.id}`}
                  >
                    {task.task}
                  </span>
                  <div className="task-buttons">
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className={`toggle-button ${task.completed ? 'undo' : 'complete'}`}
                      data-testid={`toggle-button-${task.id}`}
                    >
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="delete-button"
                      data-testid={`delete-button-${task.id}`}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="task-stats" data-testid="task-stats">
          <p>Total tasks: <span data-testid="total-count">{tasks.length}</span></p>
          <p>Completed: <span data-testid="completed-count">{tasks.filter(t => t.completed).length}</span></p>
          <p>Remaining: <span data-testid="remaining-count">{tasks.filter(t => !t.completed).length}</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
