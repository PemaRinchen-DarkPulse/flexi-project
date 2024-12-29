import React, { useState } from "react";
import CourseDeatils from "../components/courses/publish/CourseDeatils";
import Module from "../components/courses/publish/CourseMaterials";
import CoursesDeatilsSideBar from "../components/courses/publish/CoursesDeatilsSideBar";
import NavBar from "../components/navbar&footer/NavBar";
import Footer from "../components/navbar&footer/Footer";
import ModuleSideBar from "../components/courses/publish/ModuleSideBar";

const PublishCourses = () => {
  const [activeComponent, setActiveComponent] = useState("courseDetails");

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h3 className="text-center mb-4">Publish Your Courses</h3>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 mb-3">
            <div className=" ">
              <button
                onClick={() => setActiveComponent("courseDetails")}
                className={`btn ${
                  activeComponent === "courseDetails" ? "btn-primary" : "btn-outline-secondary"
                }`}
              >
                Course Details
              </button>
              <button
                onClick={() => setActiveComponent("module")}
                className={`btn ${
                  activeComponent === "module" ? "btn-primary" : "btn-outline-secondary"
                }`}
              >
                Course Materials
              </button>
            </div>
            <div className="">
              <h3>Course Overview</h3>
               <CoursesDeatilsSideBar />
               <ModuleSideBar/>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                {activeComponent === "courseDetails" && <CourseDeatils />}
                {activeComponent === "module" && <Module />}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary">Save Progress</button>
              <button className="btn btn-success">Preview & Publish</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublishCourses;
