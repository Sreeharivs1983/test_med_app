import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {

  const username =
    sessionStorage.getItem("name") ||
    (sessionStorage.getItem("email") || "").split("@")[0];

  const handleDownload = () => {
    alert("Report downloaded successfully!");
  };

  return (
    <div className="reports-container">
      <div className="report-card">

        <h2>Medical Report</h2>

        <p><strong>Patient Name:</strong> {username}</p>
        <p><strong>Doctor:</strong> Dr. John Smith</p>
        <p><strong>Speciality:</strong> General Physician</p>
        <p><strong>Date:</strong> 24 Feb 2026</p>
        <p><strong>Diagnosis:</strong> Mild Viral Fever</p>
        <p><strong>Prescription:</strong> Paracetamol 500mg - Twice daily</p>

        <button onClick={handleDownload}>
          Download Report
        </button>

      </div>
    </div>
  );
};

export default ReportsLayout;