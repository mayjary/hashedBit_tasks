import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const updatedList = [...todoList, task.trim()];
    updatedList.sort((a, b) => a.localeCompare(b));
    setTodoList(updatedList);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList.sort((a, b) => a.localeCompare(b)));
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: '10px' }}>Add</button>

      <ul style={{ marginTop: '20px' }}>
        {todoList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '4px 8px', borderRadius: '4px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
