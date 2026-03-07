import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";


function Navbar() {
  const authContext = useContext(AuthContext)
  const navigate=useNavigate()
  function handleLogout() {
    authContext.logoutFunction()
    navigate("/logout")
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top "
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fw-bold text-black" to="/welcome">
            ToDoList
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {authContext.isAuthenticated && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              )}
              {!authContext.isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {!authContext.isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    SignUp
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
