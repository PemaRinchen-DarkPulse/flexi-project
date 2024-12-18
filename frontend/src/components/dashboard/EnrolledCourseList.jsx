import React from 'react'
import EnrolledCoursesCard from "./EnrolledCoursesCard";
const EnrolledCourseList = () => {
  return (
    <div className="row">
      <h3>Your Enrolled Course</h3>
        <div className="col-6">
          <EnrolledCoursesCard />
        </div>
        <div className="col-6">
          <EnrolledCoursesCard />
        </div>
        <div className="col-6">
          <EnrolledCoursesCard />
        </div>
        <div className="col-6">
          <EnrolledCoursesCard />
        </div>
      </div>
  )
}

export default EnrolledCourseList;