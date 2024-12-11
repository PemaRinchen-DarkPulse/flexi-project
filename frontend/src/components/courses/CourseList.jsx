import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between align-items-center w-100 mb-3">
        <h3 style={{ fontWeight: 'bold', marginBottom: '0' }}>Popular Courses</h3>
        <a href="" className='me-4' style={{ textDecoration: 'none',}}>See All</a>
      </div>
      <div className="col-4">
        <CourseCard title="RCSC Preliminary Exam Prep" description="JavaScript is a versatile programming language that powers the dynamic behavior of websites and web applications. From simple interactivity to complex web applications, JavaScript is essential for creating engaging and functional user experiences. This course introduces you to the core concepts of JavaScript, including variables, functions, loops, and events. You will learn how to manipulate the Document Object Model (DOM), handle user inputs, and dynamically update content on a webpage. With hands-on exercises, you will develop practical skills to write efficient and maintainable code. Whether you're a beginner or looking to refine your skills, this course provides a solid foundation in JavaScript, enabling you to build interactive and responsive web applications"/>
      </div>
      <div className="col-4">
        <CourseCard title="Bhutan Civil Service Aptitude Test" description="Learn the basics of React, a popular JavaScript library for building user interfaces. Explore components, props, state, and hooks in this beginner-friendly course." />
      </div>
      <div className="col-4">
        <CourseCard title="Main Examination Mastery" description="This short course provides a fundamental understanding of CSS, helping you design beautiful and responsive web pages with ease." />
      </div>
    </div>
  );
};

export default CourseList;
