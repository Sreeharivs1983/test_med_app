import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings }) => {

  const [appointments, setAppointments] = useState([]);

  const handleFormSubmit = (appointmentData) => {
    setAppointments([appointmentData]);
  };

  const handleCancel = () => {
    setAppointments([]);
  };

  return (
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

        {appointments.length === 0 ? (
          <Popup
            trigger={
              <button className="book-appointment-btn">
                Book Appointment
                <div className="no-fee">No Booking Fee</div>
              </button>
            }
            modal
          >
            {(close) => (
              <AppointmentForm
                doctorName={name}
                doctorSpeciality={speciality}
                onSubmit={(data) => {
                  handleFormSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>
        ) : (
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
  );
};

export default DoctorCard;