import React from 'react'
import Hero from '../components/Hero'
import CallToAcion from '../components/CallToAcion'
import Benefits from '../components/Benefits'
import Footer from '../components/navbar&footer/Footer'
import NavBar from '../components/navbar&footer/NavBar'
import CourseList from '../components/courses/CourseList'
export const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <div style={{marginTop:"80px"}}>
      <Hero/>
      <Benefits/>
      <CourseList/>
      <CallToAcion/>
      </div>
    <Footer/>
    </div>
  )
}
