import React from "react";
import { AuthButton } from "../button/MyButton";
import { FaClock, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import RactImg from "../../assets/images/courses/react.jpg";
const TestimonialsCard = (props) => {
    const styles = {
        card: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
          backgroundColor: "#f8f9fa",
        },
        description: {
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "1.5em",
          height: "4.5em",
        },
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
        <div style={styles.card}>
          <div className="m-3 d-flex flex-column mb-4">
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
            <p style={styles.description}>{props.description}</p>
          </div>
        </div>
      );
}

export default TestimonialsCard
