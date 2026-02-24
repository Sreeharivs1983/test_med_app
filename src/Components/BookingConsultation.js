import React, { useState } from "react";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";

const doctorsData = [
  { id: 1, name: "Dr. John Smith", speciality: "Dentist", experience: 12, ratings: 4.8 },
  { id: 2, name: "Dr. Emily Brown", speciality: "Dermatologist", experience: 8, ratings: 4.5 },
  { id: 3, name: "Dr. Michael Lee", speciality: "General Physician", experience: 15, ratings: 4.9 },
  { id: 4, name: "Dr. Sarah Wilson", speciality: "Homeopath", experience: 10, ratings: 4.4 },
];

const BookingConsultation = () => {

  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  const filteredDoctors = selectedSpeciality
    ? doctorsData.filter(
        (doctor) =>
          doctor.speciality.toLowerCase() === selectedSpeciality.toLowerCase()
      )
    : [];

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>

      <FindDoctorSearch onSelectSpeciality={setSelectedSpeciality} />

      {/* Show message before selecting speciality */}
      {!selectedSpeciality && (
        <p style={{ marginTop: "30px", color: "#555" }}>
          Please select a speciality to view available doctors.
        </p>
      )}

      {/* Show doctors if found */}
      {selectedSpeciality && filteredDoctors.length > 0 &&
        filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
          />
        ))
      }

      {/* Show message if no doctors found */}
      {selectedSpeciality && filteredDoctors.length === 0 && (
        <p style={{ marginTop: "30px", color: "red" }}>
          No doctors available for this speciality.
        </p>
      )}

    </div>
  );
};

export default BookingConsultation;