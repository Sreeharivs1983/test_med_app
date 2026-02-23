import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // If already logged in, redirect to home
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await res.json();

      if (json.authtoken) {
        // Store token
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("email", email);

        navigate("/");
        window.location.reload();
      } else {
        if (json.errors && Array.isArray(json.errors)) {
          setError(json.errors.map(err => err.msg).join(", "));
        } else {
          setError(json.error || "Login failed.");
        }
      }

    } catch (err) {
      setError("Server connection failed.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h2>Login</h2>

        <p className="signup-link">
          Are you a new member?{" "}
          <Link to="/signup">Sign Up Here</Link>
        </p>

        <form onSubmit={login}>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-primary">
              Login
            </button>
            <button type="reset" className="btn-secondary">
              Reset
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;