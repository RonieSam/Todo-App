
function Alert({ danger = false }) {
  return (
    <div className="container-fluid p-0" style={{ height: "80px" }}>
      {danger&& (
        <div className="alert alert-danger" role="alert">
          Wrong Credentials
        </div>
      )}
      
    </div>
  );
}

export default Alert;
