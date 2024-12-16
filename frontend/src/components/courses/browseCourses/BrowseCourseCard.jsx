import React from 'react';
import { BsBook, BsPeople, BsClock } from 'react-icons/bs'; // Import icons
import {InstructorProfileSection} from '../CourseCard'
const BrowseCourseCard = () => {
  return (
    <div className="card shadow-sm mx-auto mb-3">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 d-flex align-items-center">
          General Knowledge for RCSC
        </h5>
        <div>
          <InstructorProfileSection/>
        </div>
        <p className="card-text text-muted mb-3">
          A comprehensive overview of general knowledge topics relevant to the RCSC exam.
        </p>

        <div className="d-flex gap-2 mb-3">
          <span className="badge bg-light text-dark">General Knowledge</span>
          <span className="badge bg-light text-dark">Beginner</span>
        </div>
        <div className="d-flex text-muted mb-3">
          <div className="me-4 d-flex align-items-center">
            <BsPeople className="me-1" /> 1200 students
          </div>
          <div className="d-flex align-items-center">
            <BsClock className="me-1" /> 8 weeks
          </div>
        </div>

        <a href="#" className="btn btn-dark w-100">
          View Course
        </a>
      </div>
    </div>
  );
};

export default BrowseCourseCard;
