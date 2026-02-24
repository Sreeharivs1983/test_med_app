import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Notification.css";

const Notification = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // NEW STATE to control visibility
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {

    const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));

    let storedAppointmentData = null;

    if (storedDoctorData?.name) {
      storedAppointmentData = JSON.parse(
        localStorage.getItem(storedDoctorData.name)
      );
    }

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);   // SHOW notification if appointment exists
    }

  }, []);

  // 👇 EFFECT TO HIDE NOTIFICATION IF APPOINTMENT IS CANCELLED
  useEffect(() => {
    if (!appointmentData) {
      setShowNotification(false);
    }
  }, [appointmentData]);

  // Function to simulate cancellation
  const handleCancel = () => {
    localStorage.removeItem(doctorData?.name);
    setAppointmentData(null);  // This triggers re-render
  };

  return (
    <>
      <Navbar />
      {children}

      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container">
          <h3>Appointment Details</h3>

          <p><strong>Patient:</strong> {username}</p>
          <p><strong>Doctor:</strong> {doctorData?.name}</p>
          <p><strong>Date:</strong> {appointmentData?.date}</p>
          <p><strong>Time:</strong> {appointmentData?.time}</p>

          <button onClick={handleCancel} className="cancel-btn">
            Cancel Appointment
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;