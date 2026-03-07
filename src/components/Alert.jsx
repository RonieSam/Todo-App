
function Alert({ type="",msg}) {
  return (
    <div className="container-fluid p-0" style={{ height: "80px",marginTop:"52px" }}>
      {type==="danger" && (
        <div className="alert alert-danger" role="alert">
          {msg}
        </div>
      )}
      {type==="success" && (
        <div className="alert alert-success" role="alert">
          {msg}
        </div>
      )}
      
    </div>
  );
}

export default Alert;
