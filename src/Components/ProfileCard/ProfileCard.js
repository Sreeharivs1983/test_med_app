import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      const name = sessionStorage.getItem("name");
      const email = sessionStorage.getItem("email");
      const phone = sessionStorage.getItem("phone");

      setUserDetails({
        name: name || "",
        email: email || "",
        phone: phone || ""
      });
    }
  }, [navigate]);

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h1>Welcome, {userDetails.name}</h1>
        <p><b>Email:</b> {userDetails.email}</p>
        <p><b>Phone:</b> {userDetails.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;