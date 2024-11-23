import React from 'react'
import Hero from '../components/Hero'
import CallToAcion from '../components/CallToAcion'
export const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <CallToAcion/>
    <a href="/login">Log In</a> {" "}
    <a href="/signup">Sign Up</a>
    </div>
  )
}
