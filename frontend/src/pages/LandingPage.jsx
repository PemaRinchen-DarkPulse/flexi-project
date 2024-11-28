import React from 'react'
import Hero from '../components/Hero'
import CallToAcion from '../components/CallToAcion'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import NavBar from '../components/button/NavBar'
export const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <div style={{marginTop:"80px"}}>
      <Hero/>
      <CallToAcion/>
      <Benefits/>
      </div>
    <Footer/>
    </div>
  )
}
