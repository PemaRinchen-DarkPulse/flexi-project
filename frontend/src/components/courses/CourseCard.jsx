import React from "react";
import { AuthButton } from "../button/MyButton";
import { FaClock, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import RactImg from "../../assets/images/courses/react.jpg";
import { BsBook, BsPeople, BsClock } from "react-icons/bs"; // Import icons
const CourseCard = (props) => {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "0.5rem",
      backgroundColor: "#f8f9fa",
    },
    thumbnail: {
      display: RactImg ? "block" : "none",
      width: "100%",
      height:"180px",
      objectFit: "cover",
      borderTopLeftRadius: "0.5rem",
      borderTopRightRadius: "0.5rem",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      height: "3rem", // Reserve height for a maximum of two lines
      overflow: "hidden",
    },
    description: {
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "1.5em",
      height: "4.5em", // Reserve space for 3 lines (1.5em x 3)
    },
  };

  return (
    <div style={styles.card}>
      {/* Course Thumbnail */}
      <img src={RactImg} alt="Course Thumbnail" style={styles.thumbnail} />
      {!RactImg && (
        <div className="text-center text-white">
          <i className="bi bi-image" style={{ fontSize: "3rem" }}></i>
          <p>No Image Available</p>
        </div>
      )}
      <div className="card-body m-3">
        <h5 className="card-title fw-bold mb-3 d-flex align-items-center">
          General Knowledge for RCSC
        </h5>
        <div>
          <InstructorProfileSection />
        </div>
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

export default CourseCard;

export const InstructorProfileSection = () => {
  const styles = {
    profileImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "1rem",
    },
    profileImageImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
  return (
    <div className="d-flex align-items-center mb-3">
      <div style={styles.profileImage}>
        <img
          src={RactImg}
          alt="Instructor Profile"
          style={styles.profileImageImg}
        />
      </div>
      <div>
        <h5 className="mb-0">Dr. John Doe</h5>
        <small className="text-muted">Instructor</small>
      </div>
    </div>
  );
};

export const Deatils = () => {
  return (
    <div className="mb-3">
      <ul className="list-unstyled">
        <li className="mb-2">
          <FaClock className="me-2 text-muted" />
          <strong>6 weeks</strong>
        </li>
        <li className="mb-2">
          <FaCalendarAlt className="me-2 text-muted" />
          <strong>Jan 15, 2024</strong>
        </li>
        <li className="mb-2">
          <FaDollarSign className="me-2 text-muted" />
          <strong>Nu. 2500</strong>
        </li>
      </ul>
    </div>
  );
};
