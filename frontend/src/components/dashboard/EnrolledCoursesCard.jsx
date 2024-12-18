import React from "react";
import { BiBook } from "react-icons/bi"; // Book icon for "Continue Learning"
import { FiArrowRight } from "react-icons/fi"; // Arrow icon for "View Details"

const EnrolledCoursesCard = () => {
  const completedLessons = 13;
  const totalLessons = 20;
  const progressPercentage = ((completedLessons / totalLessons) * 100).toFixed(0); // Rounded to 0 decimals

  return (
    <div
      className="card shadow-sm my-3 border-0"
      style={{ borderRadius: "8px", transition: "background-color 0.3s ease" }}
    >
      {/* Card Body */}
      <div className="card-body p-4">
        <h5 className="card-title fw-bold">Bhutanese History and Culture</h5>
        <p className="text-muted mb-2">
          {completedLessons} of {totalLessons} lessons completed
        </p>

        {/* Progress Bar */}
        <div className="progress my-3" style={{ height: "15px", borderRadius: "8px" }}>
          <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={{ width: `${progressPercentage}%`, borderRadius: "8px" }}
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="text-muted">{progressPercentage}% Completed</div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3">
          {/* Continue Learning */}
          <button
            className="btn btn-outline-dark d-flex align-items-center gap-1"
            style={{ transition: "background-color 0.3s, color 0.3s" }}
          >
            <BiBook size={20} />
            Continue Learning
          </button>

          {/* View Details */}
          <button
            className="btn btn-outline-dark d-flex align-items-center gap-1 border-0"
            style={{ transition: "background-color 0.3s, color 0.3s" }}
          >
            View Details
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Hover Effect for Buttons */}
      <style>
        {`
          .btn-outline-dark:hover {
            background-color: #f0f0f0; /* Light grey background */
            color: #000; /* Black text */
          }
        `}
      </style>
    </div>
  );
};

export default EnrolledCoursesCard;
