import React, { useState } from "react";
import CourseDeatils from "../components/courses/publish/CourseDeatils";
import Module from "../components/courses/publish/CourseMaterials";
import CoursesDeatilsSideBar from "../components/courses/publish/CoursesDeatilsSideBar";
import ModuleSideBar from "../components/courses/publish/ModuleSideBar";

const PublishCourses = () => {
  const [activeComponent, setActiveComponent] = useState("courseDetails");
  return (
    <div>
      <h2>Publish a Course</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveComponent("courseDetails")}
          style={{
            padding: "10px",
            background: activeComponent === "courseDetails" ? "#007BFF" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Course Details
        </button>
        <button
          onClick={() => setActiveComponent("module")}
          style={{
            padding: "10px",
            background: activeComponent === "module" ? "#007BFF" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Course Materials
        </button>
      </div>
      <div className="row">
        <div className="col-4">
          {activeComponent === "courseDetails" && <CoursesDeatilsSideBar />}
          {/* {activeComponent === "module" && <ModuleSideBar />} */}
        </div>
        <div className="col-8">
          {activeComponent === "courseDetails" && <CourseDeatils />}
          {activeComponent === "module" && <Module />}
          {/* Buttons are placed below the main content */}
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button style={{ padding: "10px", background: "#007BFF", color: "#fff", border: "none", cursor: "pointer" }}>
              Save Progress
            </button>
            <button style={{ padding: "10px", background: "#28A745", color: "#fff", border: "none", cursor: "pointer" }}>
              Preview & Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishCourses;
