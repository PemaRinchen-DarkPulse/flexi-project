import React from 'react'
import { AuthButton } from '../button/MyButton'

const CourseCard = () => {
  return (
        <div className='shadow-sm border rounded-3 p-3'>
            <div>
              Image
            </div>
            <h1>RCSC Preliminary Exam Prep</h1>
            <div className='d-flex'>
            <h6>Prifile</h6>
              <div className="col">
                <h3>Name</h3>
                <span>Instructor</span>
              </div>
            </div>
            <div>
              Description
            </div>
            <div>
              <p>Duration</p>
              <p>Date</p>
              <span>Star</span>
            </div>
            <AuthButton label="Enroll Now"/>
        </div>
  )
}

export default CourseCard