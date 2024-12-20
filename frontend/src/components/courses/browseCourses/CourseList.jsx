import React, { useState } from 'react';
import BrowseCourseCard from './BrowseCourseCard';
const BrowseCourseList = () => {
  const courses = [
    {
      title: "RCSC Preliminary Exam Prep",
      description:
        "JavaScript is a versatile programming language that powers the dynamic behavior of websites and web applications. From simple interactivity to complex web applications, JavaScript is essential for creating engaging and functional user experiences. This course introduces you to the core concepts of JavaScript, including variables, functions, loops, and events. You will learn how to manipulate the Document Object Model (DOM), handle user inputs, and dynamically update content on a webpage. With hands-on exercises, you will develop practical skills to write efficient and maintainable code. Whether you're a beginner or looking to refine your skills, this course provides a solid foundation in JavaScript, enabling you to build interactive and responsive web applications."
    },
    {
      title: "Bhutan Civil Service Aptitude Test",
      description: "Learn the basics of React, a popular JavaScript library for building user interfaces. Explore components, props, state, and hooks in this beginner-friendly course."
    },
    {
      title: "Advanced RCSC Exam Strategies",
      description: "Master the strategies required to excel in the RCSC exams. Dive deep into advanced problem-solving techniques and time management skills."
    },
    {
      title: "Introduction to Bhutan History",
      description: "Explore Bhutan's rich history and heritage, an essential component of the RCSC exams. Learn about key historical events, figures, and cultural milestones."
    },
    {
      title: "Ethics in Civil Service",
      description: "Understand the ethical principles and values required for a successful career in civil service. Learn through case studies and real-life applications."
    },
    {
      title: "Leadership and Public Policy",
      description: "Develop leadership skills and understand public policy formulation to better prepare for your civil service journey."
    }
  ];

  const [visibleCourses, setVisibleCourses] = useState(3);
  return (
    <div className="row p-3">
      {courses.slice(0, visibleCourses).map((course, index) => (
        <div key={index} className="col-4">
          <BrowseCourseCard title={course.title} description={course.description} />
        </div>
      ))}
    </div>
  );
};

export default BrowseCourseList;