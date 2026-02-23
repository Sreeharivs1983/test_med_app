import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Login validation passed (Backend will be connected later)");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h2>Login</h2>

        <p className="signup-link">
          Are you a new member?{" "}
          <Link to="/signup">Sign Up Here</Link>
        </p>

        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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

          <p className="forgot-password">
            Forgot Password?
          </p>
        </form>

      </div>
    </div>
  );
};

export default Login;