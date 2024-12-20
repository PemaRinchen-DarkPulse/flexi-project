import React from 'react';
import HeroImage from '../assets/images/heroimg.jpg';
import { CallToAcionBtn } from './button/MyButton';

const Hero = () => {
  return (
    <div className="hero-section row align-items-center" style={{ background: '#0f0c29', color: '#fff', padding: '50px' }}>
      <div className="col-7">
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Ace the RCSC Exam with Confidence
        </h1>
        <h5 style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px' }}>
          Your one-stop destination for expert guidance, study resources, and exam strategies.
        </h5>
        <div>
        <CallToAcionBtn link="/signup" label="Sign Up Now" bgColor="#ff6b35"/>
        <CallToAcionBtn link="/browseCourses" label="Explore Courses →" bgColor="#007bff"/>
        </div>
      </div>

      <div className="col-md-5 text-center">
        <img className='rounded-circle'
          src={HeroImage}
          alt="Students studying"
          style={{
            width: '100%',
            maxWidth: '300px',
            height:"300px",
            border: '5px solid #ff6b35',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
