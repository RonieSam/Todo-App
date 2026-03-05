  import { useContext, useState } from "react";
  import "../App.css";
  import Alert from "./Alert";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "./AuthContext";
  function Login() {
    const authContext=useContext(AuthContext)
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
    const [showPass,setShowPass]=useState(true)
    const [danger, setDanger] = useState(false);
    const navigate=useNavigate()
  function setSucessFunc(x){
    if(x==true){
      setSucess(true);
      setDanger(false);
    }else{
      setSucess(false);
    }
  }
  function setDangerFunc(x){
    if(x==true){
      setDanger(true);
      setSucess(false);
    }else
      setDanger(false);
    }
  

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

    function handleSubmit(event){
      event.preventDefault();
      if(authContext.loginFunction(username,password)){
        navigate(`/welcome/${username}`)
      }else{
        setDangerFunc(true)
        setTimeout(()=>setDangerFunc(false),3000)
      }
    }



    return (
      <div style={{paddingTop:"52px"}}>
        <Alert danger={danger}/>

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
