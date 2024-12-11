import React from 'react';
import { CallToAcionBtn } from './button/MyButton';

const CallToAction = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">Join the RCSC Success Journey</h1>
        <p className="text-xl font-medium text-center">
          Prepare smarter, not harder. Access expert guidance, comprehensive resources, and tailored strategies to excel in your RCSC exam.
        </p>
        <div className="d-flex justify-content-center">
          <CallToAcionBtn link="/signup" label="Get Started Now" bgColor="#ff6b35"/>
          <CallToAcionBtn link="/about" label="Learn More" bgColor="#007bff"/>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
