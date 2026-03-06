import React, { useState } from "react";
import { addTask, deleteTask } from "./api/TodoRest";

function TaskCard({ task, setTask , refreshTodos,changeTask,setUpdate,update}) {

  function removeTask(username,id){
    deleteTask(username,id)
                  .then(()=>{
                    setUpdate(0)
                    setTask({})
                    refreshTodos()
                  })
                  .catch((err)=>console.log(err))
  }

  function newTask(task){

    addTask(task)
              .then(()=>{
                setUpdate(0)
                setTask({})
                refreshTodos()
              })
              .catch((err)=>console.log(err))
  }

  function submitButton(){
    if(update==1){
      changeTask(task);
    }else if(update==2){
      newTask(task)
    }
  }
  
  function updateDesc(event){
    setTask({
      ...task,
      desc:event.target.value,
    })
  }
  function updateDate(event){
    setTask({
      ...task,
      targetDate:event.target.value,
    })
  }
  function updateDone(done){
  const updatedTask = {
    ...task,
    done: done
  }
  setTask(updatedTask)
  changeTask(updatedTask)
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
            setTask({})
            setUpdate(0)
          }}
          className="btn-close"
          aria-label="Close"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        ></button>

        {update==0 && <h3 className="card-title mb-3">{task.desc}</h3>}

        {update!=0 && <input onChange={updateDesc} className="form-control mb-3" value={task.desc} />}

        {update==0 && (
          <p className="card-text mb-3">Due Date - {task.targetDate}</p>
        )}

        {update!=0 && (
          <input
            type="date"
            onChange={updateDate}
            className="form-control mb-3"
            value={task.targetDate}
          />
        )}

        {update==0&&<div className="container mt-3">
      <div className="row g-2">

        <div className="col-4">
          {!task.done&&<button className="btn btn-success w-100" onClick={()=>updateDone(true)}>
            Done
          </button>}
          {task.done&&<button className="btn btn-warning w-100" onClick={()=>updateDone(false)}>
            Undo
          </button>}
        </div>

        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={()=>{setUpdate(1)}}>
            Update
          </button>
        </div>

        <div className="col-4">
          <button className="btn btn-danger w-100" onClick={()=>{removeTask(task.username,task.id)}}>
            Delete
          </button>
        </div>

      </div>
    </div> }
        {update!=0&&
        <div className="d-flex gap-2 mt-3 ">
          
              <button className="flex-fill btn btn-success w-100" onClick={submitButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                </svg>
              </button>

            
              <button className="flex-fill btn btn-danger w-100" onClick={()=>setUpdate(0)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            
        </div>}
      </div>
    </div>
  );
}

export default TaskCard;
