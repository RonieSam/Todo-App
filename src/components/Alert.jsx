
function Alert({ danger = false, sucess = false }) {
  return (
    <div className="container-fluid p-0" style={{ height: "80px" }}>
      {danger && !sucess && (
        <div className="alert alert-danger" role="alert">
          Wrong Credentials
        </div>
      )}
      {sucess && !danger && (
        <div className="alert alert-success mt-n4 " role="alert">
          Successfully Login
        </div>
      )}
      {!sucess && !danger && <div></div>}
    </div>
  );
}

export default Alert;
