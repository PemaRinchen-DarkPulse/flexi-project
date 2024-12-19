import React from 'react';
import { Container } from 'reactstrap';
import NavBar from "../components/navbar&footer/NavBar";
import Footer from "../components/navbar&footer/Footer";
import EnrolledCourseList from "../components/dashboard/EnrolledCourseList";

const MyCourses = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="py-4" style={{ marginTop: "80px" }}>
        <div className="mb-4">
          <h2 className="mb-2">My Courses</h2>
          <p className="text-muted">
            Track your progress and continue learning from where you left off
          </p>
        </div>
        <EnrolledCourseList />
      </Container>
      <Footer />
    </>
  );
};

export default MyCourses;
