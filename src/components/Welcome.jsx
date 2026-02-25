import { useNavigate, useParams } from 'react-router-dom'
import '../App.css'

function Welcome() {
  const navigate=useNavigate()
  const params=useParams();
  function getStarted(){
    navigate('/')
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

        <button className="btn btn-primary btn-lg" onClick={getStarted}>
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Welcome