import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Sign_Up.css";

const SignUp = () => {

  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!role || !name || !phone || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });

      const json = await response.json();

      if (json.authtoken) {
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("phone", phone);
      
        navigate("/");
        window.location.reload();
      }else {
        if (json.errors && Array.isArray(json.errors)) {
          setError(json.errors.map(err => err.msg).join(", "));
        } else if (typeof json.error === "string") {
          setError(json.error);
        } else {
          setError("Registration failed.");
        }
      }
    } catch (err) {
      setError("Server connection failed.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Account</h2>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <form onSubmit={register}>

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

export default SignUp;