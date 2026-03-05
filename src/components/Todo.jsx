import React from "react";

function Todo() {
  const formatDate = (d) => {
  const day = d.getDate().toString().padStart(2, '0');
  const month = d.toLocaleString('default', { month: 'short' });
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${month} ${day}, ${hours}:${minutes}`;
};
  const todos = [
    { id: 1, desc: "this is a task" ,date:formatDate(new Date()) ,status:false },
    { id: 2, desc: "this is a task" ,date:formatDate(new Date()),status:false },
    { id: 3, desc: "this is a task" ,date:formatDate(new Date()),status:false },
    { id: 4, desc: "this is a task" ,date:formatDate(new Date()),status:false },
    { id: 5, desc: "this is a task" ,date:formatDate(new Date()),status:false },
    { id: 6, desc: "this is a task" ,date:formatDate(new Date()),status:false },
    { id: 7, desc: "this is a task" ,date:formatDate(new Date()),status:false },
  ];

  return (
    
    <div style={{ padding: "80px" }}>
        <h1>Get started with your work</h1>
      <ol className="list-group " style={{ width: "300px" }}>
        {
            todos.map(todo=>(
                <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.id} {todo.desc}</div>
            {todo.date}
          </div>
          <span className="h4">
            {" "}
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </span>
        </li>
            ))
        }
      </ol>
    
    </div>
  );
}

export default Todo;
