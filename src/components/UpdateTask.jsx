import React, { useState , useContext} from "react";
import { addTask, deleteTask } from "./api/TodoRest";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AuthContext } from "./AuthContext";

function UpdateTask({
  task,
  setTask,
  refreshTodos,
  changeTask,
  setUpdate,
  update,
  setAlertType,
  setAlertMsg,
}) {
    const authContext=useContext(AuthContext)
  

  function newTask(task) {
    addTask(task,authContext.token)
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

  function submitButton(values) {
    const updatedTask = {
      ...task,
      desc: values.desc,
      targetDate: values.targetDate,
    };
    setTask(updatedTask);

    if (update == 1) {
      changeTask(updatedTask);
    } else if (update == 2) {
      newTask(updatedTask);
    }
  }

  

  function validate(values) {
    let errors = {};
    if (values.desc.length == 0) errors.desc = "Enter valid description";
    else if (values.targetDate.length == 0) {
      errors.targetDate = "Enter valid date";
    } else {
      const date = new Date(values.targetDate);
      if (date < Date.now()) errors.targetDate = "Please select a future date.";
    }
    return errors;
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

        
        <Formik
          initialValues={{ desc: task.desc, targetDate: task.targetDate }}
          enableReinitialize={true}
          onSubmit={submitButton}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => {
            return (
              <Form>
                <ErrorMessage
                  className="alert alert-warning"
                  component="div"
                  name="desc"
                />
                <ErrorMessage
                  className="alert alert-warning"
                  component="div"
                  name="targetDate"
                />

                
                  <fieldset>
                    <Field
                      type="text"
                      className="form-control mb-1"
                      name="desc"
                    ></Field>
                  </fieldset>
                

                  <fieldset>
                    <Field
                      type="date"
                      className="form-control mt-1"
                      name="targetDate"
                    ></Field>
                  </fieldset>

                  <div className="d-flex gap-2 mt-3 ">
                    <button
                      className="flex-fill btn btn-success w-100"
                      type="submit"
                    >
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

                    <button
                      className="flex-fill btn btn-danger w-100"
                      type="button"
                      onClick={() => setUpdate(0)}
                    >
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
                  </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default UpdateTask;
