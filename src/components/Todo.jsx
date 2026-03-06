import React, { useEffect , useState} from "react";
import { getAllTasks } from "./api/TodoRest";
import { useParams } from 'react-router-dom'


function Todo() {
  const formatDate = (d) => {
  const day = d.getDate().toString().padStart(2, '0');
  const month = d.toLocaleString('default', { month: 'short' });
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${month} ${day}, ${hours}:${minutes}`;
};


const [todos,setTodos]=useState([])
const params=useParams()

useEffect(()=>{
  refreshTodos();
})

function refreshTodos(){
  getAllTasks(params.username)
                .then((response)=>setTodos(response.data))
                .catch((err)=>console.log(err))
}

  return (
    
    <div style={{ padding: "80px" }}>
        <h1>Get started with your work</h1>
      <ol className="list-group " style={{ width: "300px" }}>
        {
            todos.map(todo=>(
                <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.id} {todo.desc}</div>
            {todo.targetDate}
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
