import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be 10 digits");
      return;
    }

    onSubmit({ name, phoneNumber, date, time });
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Appointment</h2>

      <div className="doctor-info">
        <p><strong>{doctorName}</strong></p>
        <p>{doctorSpeciality}</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter 10 digit phone number"
          />
        </div>

        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Select Time Slot</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
        </div>

        <button type="submit" className="confirm-btn">
          Confirm Appointment
        </button>

      </form>
    </div>
  );
};

export default AppointmentForm;