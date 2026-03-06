import React, { useEffect, useState } from "react";
import { getAllTasks } from "./api/TodoRest";
import { useParams } from "react-router-dom";
import TaskCard from "./taskCard";
import { updateTask } from "./api/TodoRest";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({});
  const [update, setUpdate] = useState(0);

  const params = useParams();

  useEffect(() => {
    refreshTodos();
  }, [params.username]);

  function refreshTodos() {
    getAllTasks(params.username)
      .then((response) => setTodos(response.data))
      .catch((err) => console.log(err));
  }

  function changeTask(updatedTask) {
    updateTask(updatedTask)
      .then(() => {
        refreshTodos();
      })
      .catch((err) => console.log(err));
  }

  function addNewTaskButton(){
    const newTask={
      username:params.username,
      desc:"",
      targetDate:"",
      done:false
    }

    setTask(newTask)
    setUpdate(2)
  }


  function updateDone(task) {
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    changeTask(updatedTask);
  }

  return (
    <>
      {Object.keys(task).length != 0 && (
        <div className="overlay-background">
          <TaskCard
            setTask={setTask}
            task={task}
            refreshTodos={refreshTodos}
            changeTask={changeTask}
            update={update}
            setUpdate={setUpdate}
          />
        </div>
      )}
      <div className="container mt-5">
        <div className="card shadow-lg p-4" style={{ position: "relative" }}>
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center"
            style={{ width: "45px", height: "45px" }}
            onClick={addNewTaskButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
          <h2 className="text-center mb-4">{params.username}'s Todo List</h2>

          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <button
                  key={todo.id}
                  style={{ border: 0, background: "white" }}
                  onClick={() => {
                    setTask(todo);
                  }}
                >
                  <h6 className="mb-1">{todo.desc}</h6>

                  <small className="text-muted">Due: {todo.targetDate}</small>
                </button>

                <div className="d-flex align-items-center gap-3">
                  <span
                    className={`badge ${
                      todo.done ? "bg-success" : "bg-warning text-dark"
                    }`}
                  >
                    {todo.done ? "Done" : "Pending"}
                  </span>

                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => {
                      updateDone(todo);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
