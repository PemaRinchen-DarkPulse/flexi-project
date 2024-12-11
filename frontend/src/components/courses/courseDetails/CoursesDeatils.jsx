import React from 'react';
import { Deatils, InstructorProfileSection } from '../CourseCard';
import { EnrollBtn } from '../../button/MyButton';
import TestimonialsList from '../../testimonials/TestimonialsList';
import Footer from '../../navbar&footer/Footer';
import Img from '../../../assets/images/courses/react.jpg';
import NavBar from '../../navbar&footer/NavBar';

const CoursesDeatils = () => {
  return (
    <main className="bg-white">
      <NavBar/>
      <div className="container-md rounded-3 bg-white p-4"style={{marginTop:"80px"}}>
        <section className="row mb-5">
          {/* Course Details Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div>
              <h3 className="text-primary">RCSC Preliminary Exam Prep</h3>
              <InstructorProfileSection />
              <Deatils />
              <div className="mt-4">
                <EnrollBtn label="Enroll Now" />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                className="shadow"
                src={Img}
                alt="Course Thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </div>
          </div>
        </section>
        <section className="mb-5">
          <p className="text-secondary lead">
            Master the art of building modern, scalable web applications using React and Next.js. This comprehensive course covers everything from the basics to advanced topics, preparing you for real-world development challenges.
          </p>
          <div className="row">
            <div className="col-lg-8">
              <Modules />
            </div>
            <div className="col-lg-4">
              <Outcomes />
            </div>
          </div>
          <TestimonialsList />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CoursesDeatils;

export const Modules = () => {
  return (
    <div className="border rounded-3 p-4 shadow-sm bg-white">
      <h3 className="mb-4 text-success">Modules</h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Module 1: Introduction to React
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Learn the fundamentals of React, including components, props, and state, to build dynamic user interfaces.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Module 2: Advanced React Patterns
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Explore advanced concepts such as context, hooks, and performance optimization.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Module 3: Building with Next.js
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Learn how to use Next.js to build server-side rendered applications and optimize performance for SEO.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Outcomes = () => {
  return (
    <div className="border rounded-3 p-4 shadow-sm bg-white">
      <h3 className="text-success">Outcomes</h3>
      <ul className="list-unstyled mt-3">
        <li className="mb-2">
          <i className="bi bi-check-circle text-primary me-2"></i> Learn the basics of programming.
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle text-primary me-2"></i> Build dynamic and responsive web apps.
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle text-primary me-2"></i> Gain real-world development skills.
        </li>
      </ul>
    </div>
  );
};
