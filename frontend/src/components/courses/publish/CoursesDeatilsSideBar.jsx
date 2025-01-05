import React from "react";

const CoursesDetailsSideBar = ({ imageSrc, title, author, onBackToCourseDetails }) => {
  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      width: "300px",
      padding: "16px",
      borderRadius: "8px",
    },
    imageContainer: {
      width: "100%",
      height: "180px",
      backgroundColor: "#e6e6e6",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "16px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
    },
    placeholderIcon: {
      fontSize: "24px",
      color: "#999",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "8px",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    backButton: {
      padding: "10px 15px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        {imageSrc ? (
          <img src={imageSrc} alt="Course" style={styles.image} />
        ) : (
          <div style={styles.placeholderIcon}></div>
        )}
      </div>
      <h3 style={styles.title}>{title || "Course Title"}</h3>
      <p style={styles.description}>{author || "Pema Rinchen"}</p>
      <button style={styles.backButton} onClick={onBackToCourseDetails}>
        Back to Course Details
      </button>
    </div>
  );
};

export default CoursesDetailsSideBar;
