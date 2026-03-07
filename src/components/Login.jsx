  import { useContext, useEffect, useState } from "react";
  import "../App.css";
  import Alert from "./Alert";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "./AuthContext";
import { checkOnline } from "./api/TodoRest";

  function Login() {
    const authContext=useContext(AuthContext)
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
    const [showPass,setShowPass]=useState(true)
    const [danger, setDanger] = useState("");
    const navigate=useNavigate()
  
  function setDangerFunc(x){
    if(x==true){
      setDanger("danger");
    }else
      setDanger("");
    }
  
  useEffect(()=>{
    checkOnline()
            .then((response)=>console.log(response))
            .catch((err)=>navigate("/offline"))
  },[])

    function updateusername(event){
      setusername(event.target.value)
    }
    function updatePassword(event){
      setPassword(event.target.value)
    }

    function showPassUpdate(event){
      if(showPass==true)setShowPass(false)
      else setShowPass(true)
        
    
  }
    function showPassHtml(){
      if(showPass==true){
        return(<input
              type="password"
              className="form-control"
              value={password}
              onChange={updatePassword}
            />)
      }
      else {
        return(<input
              className="form-control"
              value={password}
              onChange={updatePassword}
            />)
      }
    }

    async function handleSubmit(event){
      event.preventDefault();
      if(await authContext.loginFunction(username,password)==true){
        navigate(`/welcome`)
      }else{
        setDangerFunc(true)
        setTimeout(()=>setDangerFunc(false),3000)
      }
    }



    return (
      <div>
        <Alert type={danger} msg={"Wrong Credentials"}/>

      <div className="vh-100 d-flex justify-content-center  bg-gradient">
        <form className="card shadow-lg p-5" style={{ width: "28rem", borderRadius: "16px" ,height:"26rem"}} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Username
            </label>
          
            <input
              type="username"
              className="form-control"
              value={username}
              onChange={updateusername}
            />
            
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            {showPassHtml()}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={showPassUpdate}
            />
            <label className="form-check-label" >
              Show Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
      </div>
    );
  }

  export default Login;
