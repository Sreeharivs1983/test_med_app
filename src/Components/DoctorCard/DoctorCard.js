import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings }) => {

  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (appointmentData) => {

    const doctorData = { name, speciality };
    localStorage.setItem("doctorData", JSON.stringify(doctorData));
    localStorage.setItem(name, JSON.stringify(appointmentData));

    setAppointments([appointmentData]);
    setShowForm(false);
  };

  const handleCancel = () => {
    localStorage.removeItem(name);
    localStorage.removeItem("doctorData");
    setAppointments([]);
  };

  return (
    <>
      <div className="doctor-card">

        <div className="doctor-card-left">
          <div style={{ fontSize: "60px" }}>👨‍⚕️</div>
        </div>

        <div className="doctor-card-details">
          <h3>{name}</h3>
          <p className="doctor-speciality">{speciality}</p>
          <p>{experience} years experience</p>
          <p>⭐ {ratings}</p>
        </div>

        <div className="doctor-card-options">

          {!showForm && appointments.length === 0 && (
            <button
              className="book-appointment-btn"
              onClick={() => setShowForm(true)}
            >
              Book Appointment
              <div className="no-fee">No Booking Fee</div>
            </button>
          )}

          {appointments.length > 0 && (
            <div>
              <p style={{ color: "green" }}>Appointment Booked!</p>
              <button
                className="book-appointment-btn"
                onClick={handleCancel}
                style={{ backgroundColor: "red" }}
              >
                Cancel Appointment
              </button>
            </div>
          )}

        </div>
      </div>

      {showForm && appointments.length === 0 && (
        <AppointmentForm
          doctorName={name}
          doctorSpeciality={speciality}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default DoctorCard;