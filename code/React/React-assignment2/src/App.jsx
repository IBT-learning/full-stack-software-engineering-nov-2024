import { useState } from 'react';
import './App.css';
import InputCard from './components/InputCard.jsx';
import Item from './components/Item.jsx';

// some practice data
const tasks = [
  { id: 1, task: "make dinner", completed: true },
  { id: 2, task: "wash the dishes", completed: false },
  { id: 3, task: "finish homework", completed: false },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);
  
  const toggleComplete = (id) => {
    setTaskList(taskList.map((task) => {
      return task.id === id ? {...task, completed : !task.completed} : task
    }));
  }
  
  return (
    <section className='app'>
      <InputCard 
        taskList={taskList}
        setTaskList={setTaskList}
      />

      <ul className='task-list'>
       {taskList.map((task) => {
        return <Item 
                  key={task.id}
                  task={task}
                  toggleComplete={toggleComplete}
               />
       })}
      </ul>

    </section>
  )
}

export default App
