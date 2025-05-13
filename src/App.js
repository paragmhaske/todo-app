import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';

function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 
  const newTask = {
    id: Date.now(),           
    text: task,              
    completed: false          
  };

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, newTask]);
      setTask(""); // clear input
    }
  };
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
    <h1>My To-Do List</h1>
    <input type="text" value={task}
        onChange={(e) => setTask(e.target.value)} placeholder="Add a new task..." />
    <button  onClick={handleAdd} style={{ marginLeft: "10px"} }>Add</button>  
    <ul style={{ marginTop: "20px" }}>
    {tasks.map((taskItem) => (
  <div key={taskItem.id}>
    <input
      type="checkbox"
      checked={taskItem.completed}
      onChange={() => toggleComplete(taskItem.id)}
    />
    <span style={{ textDecoration: taskItem.completed ? 'line-through' : 'none' }}>
      {taskItem.text}
    </span>
  </div>
))}

      </ul>
  </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>*/
  );
}

export default App;
