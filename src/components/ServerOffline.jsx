import React from "react";
import { checkOnline } from "./api/TodoRest";
import { useNavigate } from "react-router-dom";

function ServerOffline() {

    const navigate=useNavigate()
  function retry(){
        checkOnline()
              .then((response)=>navigate("/"))
              .catch((err)=>console.log(err))  }

  
  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"20px",
      fontFamily:"Arial"
    }}>
      
      <h1>⚠️ Server Offline</h1>
      <p>Sorry, we can't reach the server right now.</p>

      <button className="btn btn-primary"
        onClick={retry}
        style={{
          padding:"10px 20px",
          fontSize:"16px",
          cursor:"pointer"
        }}
      >
        Retry
      </button>

    </div>
  );
}

export default ServerOffline;