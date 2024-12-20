import React from 'react'
import BrowseCourseList from '../components/courses/browseCourses/CourseList'
import NavBar from '../components/navbar&footer/NavBar'
import Footer from '../components/navbar&footer/Footer'
const BrowseCourse = () => {
  return (
    <>
    <NavBar/>
    <div className='row' style={{marginTop:"80px"}}>
      <div className="col"><BrowseCourseList/></div>
    </div>
    <Footer/>
    </>
  )
}
      
export default BrowseCourse
