import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings }) => {

  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBookingClick = () => {
    if (appointments.length > 0) {
      // Cancel booking
      setAppointments([]);
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };

    setAppointments([newAppointment]);
    setShowForm(false);
  };

  return (
    <div className="doctor-card">

      <div className="doctor-card-details">
        <div className="doctor-card-detail-name">{name}</div>
        <div className="doctor-card-detail-speciality">{speciality}</div>
        <div className="doctor-card-detail-experience">
          {experience} years experience
        </div>
        <div className="doctor-card-detail-consultationfees">
          Ratings: {ratings}
        </div>
      </div>

      <div className="doctor-card-options-container">
        <button
          className={`book-appointment-btn ${
            appointments.length > 0 ? 'cancel-appointment' : ''
          }`}
          onClick={handleBookingClick}
        >
          {appointments.length > 0 ? "Cancel Appointment" : "Book Appointment"}
        </button>
      </div>

      {showForm && (
        <AppointmentForm
          doctorName={name}
          doctorSpeciality={speciality}
          onSubmit={handleFormSubmit}
        />
      )}

      {appointments.length > 0 && (
        <div className="bookedInfo">
          <p><strong>Appointment Booked!</strong></p>
          <p>Name: {appointments[0].name}</p>
          <p>Phone: {appointments[0].phoneNumber}</p>
          <p>Date: {appointments[0].date}</p>
          <p>Time: {appointments[0].time}</p>
        </div>
      )}

    </div>
  );
};

export default DoctorCard;