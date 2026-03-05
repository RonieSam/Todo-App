import { useParams, Link } from 'react-router-dom'
import '../App.css'
import { useState } from 'react';
import {retrieveHelloWorld,retrieveHelloWorldName} from './api/HelloWorldREST';

function Welcome() {
  const params = useParams();

  const [msg,setMsg]=useState("");

  function callHelloWorld(){
    retrieveHelloWorldName(params.username)
    .then((response)=>setMsg(response.data.msg))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("Cleaning Up"))
  }

  

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-gradient">

      <div className="card shadow-lg p-5 text-center" style={{ width: "28rem", borderRadius: "16px" }}>

        <h1 className="mb-3 fw-bold text-dark">
          Welcome {params.username} to Your Todo List
        </h1>

        <p className="text-muted mb-4">
          Stay organized. Stay focused. Get things done.
        </p>

        <Link to="/todo">
          <button className="btn btn-primary btn-lg w-100">
            Get Started
          </button>
        </Link>

        <button className="btn btn-success w-100 btn-lg mt-3" onClick={callHelloWorld}>
          Call Hello World
        </button>

        <div className="text-info">{msg}</div>

      </div>

    </div>
  )
}

export default Welcome