import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./Components/DoctorCard/DoctorCard";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import ReviewForm from "./Components/ReviewForm/ReviewForm";  // ✅ Added

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/test-search" element={<FindDoctorSearch />} />
            <Route path="/appointments" element={<BookingConsultation />} />

            {/* ✅ Reviews Route (IBM Integration Step) */}
            <Route
              path="/reviews"
              element={
                <ReviewForm
                  doctorName="Dr. John Smith"
                  doctorSpeciality="Dentist"
                />
              }
            />

            <Route
              path="/test-doctor"
              element={
                <DoctorCard
                  name="Dr. John Smith"
                  speciality="Dentist"
                  experience={12}
                  ratings={4.8}
                />
              }
            />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;