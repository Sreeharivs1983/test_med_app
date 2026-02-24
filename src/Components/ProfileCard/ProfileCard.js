import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [editMode, setEditMode] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // 🔥 Reset edit mode whenever /profile route is accessed
  useEffect(() => {
    setEditMode(false);
  }, [location]);

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      const email = sessionStorage.getItem("email") || "";

      const storedName = sessionStorage.getItem("name");
      const nameFromEmail = email ? email.split("@")[0] : "";
      const name = storedName || nameFromEmail;

      const phone = sessionStorage.getItem("phone") || "";

      setUserDetails({
        name,
        email,
        phone
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    sessionStorage.setItem("name", userDetails.name);
    sessionStorage.setItem("phone", userDetails.phone);

    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-details">

        {editMode ? (
          <>
            <h2>Edit Profile</h2>

            <p>
              <b>Name:</b><br />
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </p>

            <p>
              <b>Email:</b><br />
              <input
                type="email"
                name="email"
                value={userDetails.email}
                disabled
              />
            </p>

            <p>
              <b>Phone:</b><br />
              <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
              />
            </p>

            <button onClick={handleSave}>Save</button>

          </>
        ) : (
          <>
            <h1>Welcome, {userDetails.name}</h1>
            <p><b>Email:</b> {userDetails.email}</p>
            <p><b>Phone:</b> {userDetails.phone || "Not Provided"}</p>

            <button onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default ProfileCard;