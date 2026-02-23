import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

const Sign_Up = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!role || !name || !phone || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    setError("");
    alert("Validation Passed (Backend will be connected later)");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Account</h2>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

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
              Sign Up
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

export default Sign_Up;