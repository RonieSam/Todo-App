import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
     <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="text-center">
        <div style={{ fontSize: "60px" }}>👋</div>
        <h3 className="fw-bold mt-3">You're Logged Out</h3>
        <p className="text-muted">Thanks for visiting. Please come again!</p>
        <Link to="/login" ><button
          className="btn btn-primary mt-2"
          
        >
          Login Again
        </button></Link>
        
      </div>
    </div>
  )
}

export default Logout