
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/login'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import CoursesDeatils from './components/courses/courseDetails/CoursesDeatils'
import Setting from './components/settings/Setting'
import BrowseCourses from './pages/BrowseCourse'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/dashboard' element={<Setting/>}/>
        <Route path='/coursedeatils' element={<CoursesDeatils/>}/>
        <Route path='/browseCourses' element={<BrowseCourses/>}/>

      </Routes>
    </Router>
  )
}

export default App
