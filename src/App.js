import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./Components/DoctorCard/DoctorCard";
import BookingConsultation from "./Components/BookingConsultation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/test-search" element={<FindDoctorSearch />} />
          <Route path="/appointments" element={<BookingConsultation />} />
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

      </BrowserRouter>
    </div>
  );
}

export default App;