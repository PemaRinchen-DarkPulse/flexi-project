import React from 'react'
import Hero from '../components/Hero'
import CallToAcion from '../components/CallToAcion'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
export const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <CallToAcion/>
      <Benefits/>
    <a href="/login">Log In</a> {" "}
    <a href="/signup">Sign Up</a>
    <Footer/>
    </div>
  )
}
