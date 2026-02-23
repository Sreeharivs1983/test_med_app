import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const token = sessionStorage.getItem("auth-token");
  const email = sessionStorage.getItem("email");

  const username = email ? email.split("@")[0] : "";

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        StayHealthy
      </div>

      <ul className="nav-links">
        
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* ✅ Always visible */}
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>

        {!token ? (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <span>Welcome, {username}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;