import React, { useContext, useState } from "react";
import { addTask, deleteTask } from "./api/TodoRest";
import { AuthContext } from "./AuthContext";

function TaskCard({
  task,
  setTask,
  refreshTodos,
  changeTask,
  setUpdate,
  setAlertType,
  setAlertMsg,
}) {

  const authContext=useContext(AuthContext)
  function removeTask(username, id) {
    deleteTask(username, id,authContext.token)
      .then((response) => {
        setUpdate(0);
        setTask({});
        refreshTodos();
        setAlertMsg(response.data);
        setAlertType("success");
        setTimeout(() => {
          setAlertType("");
          setAlertMsg("");
        }, 3000);
      })
      .catch((err) => console.log(err));
  }

  

  

  
  function updateDone(done) {
    const updatedTask = {
      ...task,
      done: done,
    };
    setTask(updatedTask);
    changeTask(updatedTask,authContext.token);
  }

  

  return (
    <div
      className="overlay-card card"
      style={{ width: "22rem", position: "relative" }}
    >
      <div className="card-body p-2">
        <button
          type="button"
          onClick={() => {
            setTask({});
            setUpdate(0);
          }}
          className="btn-close"
          aria-label="Close"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        ></button>

        <h3 className="card-title mb-3">{task.desc}</h3>
        
          <p className="card-text mb-3">Due Date - {task.targetDate}</p>

          <div className="container mt-3">
            <div className="row g-2">
              <div className="col-4">
                {!task.done && (
                  <button
                    className="btn btn-success w-100"
                    onClick={() => updateDone(true)}
                  >
                    Done
                  </button>
                )}
                {task.done && (
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => updateDone(false)}
                  >
                    Undo
                  </button>
                )}
              </div>

              <div className="col-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    setUpdate(1);
                  }}
                >
                  Update
                </button>
              </div>

              <div className="col-4">
                <button
                  className="btn btn-danger w-100"
                  onClick={() => {
                    removeTask(task.username, task.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        

        
      </div>
    </div>
  );
}

export default TaskCard;
