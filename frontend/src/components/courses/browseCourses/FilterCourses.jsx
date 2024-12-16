import React from 'react'

const FilterCourses = () => {
  return (
    <div className='border m-3 p-3 rounded-3 shadow-sm'>
      <h3>Filters</h3>
      <div className='d-flex flex-column'>
        <span>Search Courses</span>
        <input className='border rounded-2 p-2' type="text" placeholder='Search' />
      </div>
      <hr />
      <div>
        <h5>Subject</h5>
        <FilterCheck value="General Knowledge" />
        <FilterCheck value="English Language"/>
        <FilterCheck value="Dzongkha Language"/>
        <FilterCheck value="Analytical Writing"/>
        <FilterCheck value="Aptitude and Logical Reasoning"/>
      </div>
      <hr />
      <div>
        <h5>Exam Type</h5>
        <FilterCheck value="Preliminary Exam"/>
        <FilterCheck value="Main Exam"/>  
      </div>
    </div>
  )
}
export default FilterCourses

export const FilterCheck = (props) => {
  return (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value={props.value} id="flexCheckChecked" />
      <label class="form-check-label" for="flexCheckChecked">
        {props.value}
      </label>
    </div>
  )
}
