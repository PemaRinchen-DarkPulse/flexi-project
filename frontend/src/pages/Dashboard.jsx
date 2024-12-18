import React from "react";
import NavBar from "../components/navbar&footer/NavBar";
import EnrolledCourseList from "../components/dashboard/EnrolledCourseList";
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import Footer from "../components/navbar&footer/Footer";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="mx-3" style={{ marginTop: "80px" }}>
        <WelcomeMessage/>
      <EnrolledCourseList/>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
