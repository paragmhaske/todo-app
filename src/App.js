import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';

function App() {
  const [task, setTask] = useState(""); // for input
  const [tasks, setTasks] = useState([]); // list of tasks

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // clear input
    }
  };
  return (
    <div>
    <h1>My To-Do List</h1>
    <input type="text" value={task}
        onChange={(e) => setTask(e.target.value)} placeholder="Add a new task..." />
    <button  onClick={handleAdd} style={{ marginLeft: "10px"} }>Add</button>  
    <ul style={{ marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
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
