import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ doctorName, doctorSpeciality }) => {

  const [showForm, setShowForm] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0
  });

  const handleClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.review || formData.rating === 0) {
      alert("Please fill all fields including rating");
      return;
    }

    setSubmittedReview(formData);
    setIsDisabled(true);
    setShowForm(false);
  };

  return (
    <div className="review-container">

      <h2>Reviews</h2>

      <table>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{doctorName}</td>
            <td>{doctorSpeciality}</td>
            <td>
              <button onClick={handleClick} disabled={isDisabled}>
                Click Here
              </button>
            </td>
            <td>
              {submittedReview && (
                <div>
                  ⭐{"⭐".repeat(submittedReview.rating - 1)}
                  <p>{submittedReview.review}</p>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <h3>Give Your Review</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <textarea
            name="review"
            placeholder="Write your review"
            value={formData.review}
            onChange={handleChange}
          />

          <div className="rating">
            {[1,2,3,4,5].map((num) => (
              <span
                key={num}
                onClick={() => handleRating(num)}
                className={formData.rating >= num ? "star active" : "star"}
              >
                ⭐
              </span>
            ))}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

    </div>
  );
};

export default ReviewForm;