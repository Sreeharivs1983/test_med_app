import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {

  const reports = [
    {
      id: 1,
      doctorName: "Dr. John Doe",
      speciality: "Cardiology"
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      speciality: "Dermatology"
    }
  ];

  return (
    <div className="reports-container">
      <h1 className="reports-title">Reports</h1>

      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.doctorName}</td>
              <td>{report.speciality}</td>

              <td>
                <a
                  href="/patient_report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Report
                </a>
              </td>

              <td>
                <a
                  href="/patient_report.pdf"
                  download="patient_report.pdf"
                  className="download-btn"
                >
                  Download Report
                </a>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;