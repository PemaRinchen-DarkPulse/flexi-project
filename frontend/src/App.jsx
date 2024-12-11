
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/login'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import CoursesDeatils from './components/courses/courseDetails/CoursesDeatils'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/coursedeatils' element={<CoursesDeatils/>}/>
      </Routes>
    </Router>
  )
}

export default App
