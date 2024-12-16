import React from 'react'
import FilterCourses from '../components/courses/browseCourses/FilterCourses'
import BrowseCourseList from '../components/courses/browseCourses/CourseList'
import NavBar from '../components/navbar&footer/NavBar'
import Footer from '../components/navbar&footer/Footer'
const BrowseCourse = () => {
  return (
    <>
    <NavBar/>
    <div className='row' style={{marginTop:"80px"}}>
      <h3 className='text-center'>RCSC Exam Preparation Courses</h3>
      <div className="col-4"><FilterCourses/></div>
      <div className="col"><BrowseCourseList/></div>
    </div>
    <Footer/>
    </>
  )
}
      
export default BrowseCourse
