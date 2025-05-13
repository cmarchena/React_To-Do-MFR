import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask();
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleComplete(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const todoListStyle = {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#8f7e7e",
    margin: "20px",
  };

  const formStyle = {
    display: "flex",
    marginBottom: "20px",
  };

  const inputStyle = {
    flex: "1",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    marginLeft: "0.5rem",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
  };

  const textStyle = {
    flex: "1",
    margin: "0 10px",
  };

  const deleteButtonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <div style={todoListStyle} className="to-do-list">
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <button type="submit" className="add-btn" style={buttonStyle}>
          Add
        </button>
      </form>

      <ol style={{ paddingLeft: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={listItemStyle}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              className="text"
              style={{
                ...textStyle,
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
