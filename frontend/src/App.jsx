import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/login'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import CoursesDeatils from './components/courses/courseDetails/CoursesDeatils'
import Setting from './components/settings/Setting'
import BrowseCourses from './pages/BrowseCourse'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import PracticeTest from './pages/PracticeTest'
import VideoLecture from './pages/VideoLecture'
import MockTest from './pages/MockTest'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/browseCourses' element={<BrowseCourses/>}/>
      
      {/* Protected Routes */}
      <Route path='/settings' element={
        <ProtectedRoute>
          <Setting/>
        </ProtectedRoute>
      }/>
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>
      <Route path='/coursedeatils' element={
        <ProtectedRoute>
          <CoursesDeatils/>
        </ProtectedRoute>
      }/>
      <Route path='/practice-test' element={
        <ProtectedRoute>
          <PracticeTest/>
        </ProtectedRoute>
      }/>
      <Route path='/video-lectures' element={
        <ProtectedRoute>
          <VideoLecture/>
        </ProtectedRoute>
      }/>
      <Route path='/mock-tests' element={
        <ProtectedRoute>
          <MockTest/>
        </ProtectedRoute>
      }/>
    </Routes>
  )
}

export default App
