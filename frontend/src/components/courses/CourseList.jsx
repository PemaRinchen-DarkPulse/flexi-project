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
        <CourseCard />
      </div>
      <div className="col-4">
        <CourseCard />
      </div>
      <div className="col-4">
        <CourseCard />
      </div>
    </div>
  );
};

export default CourseList;
