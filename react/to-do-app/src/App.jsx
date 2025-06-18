import { useState } from 'react'
import './App.css'

function App() {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, text: "make dinner", completed: true },
        { id: 2, text: "wash the dishes", completed: false },
        { id: 3, text: "finish homework", completed: false },
    ]);

    const addTask = (e) => {
        e.preventDefault();

        if (taskInput.length < 5) {
            alert("Task must be at least 5 characters");
            return;
        }

        if (tasks.some(task => task.text === taskInput)) {
            alert("Task already exists!");
            return;
        }

        const newTask = {
            id: Date.now(),
            text: taskInput,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTaskInput("");
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
                <h1 className="text-3xl font-bold text-center py-4 bg-gray-800 text-white">TODO LIST</h1>

                <form onSubmit={addTask} className="p-4 border-b" id="handle-tasks">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            id="input"
                            data-testid="task-input"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="Add a new task"
                            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Add
                        </button>
                    </div>
                </form>

                <ul className="divide-y">
                    {tasks.map(task => (
                        <li key={task.id} className="flex items-center justify-between p-4">
              <span
                  className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'} task-list`}
              >
                {task.text}
              </span>
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className={`px-3 py-1 rounded text-sm ${
                                    task.completed
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {task.completed ? 'Completed' : 'Mark Complete'}
                            </button>
                        </li>
                    ))}
                </ul>

                {tasks.length === 0 && (
                    <p className="p-4 text-center text-gray-500">No tasks yet. Add one above!</p>
                )}
            </div>
        </div>
    )
}

export default App