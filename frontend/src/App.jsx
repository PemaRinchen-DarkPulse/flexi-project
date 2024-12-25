import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import CoursesDeatils from './components/courses/courseDetails/CoursesDeatils'
import Setting from './components/settings/Setting'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import PracticeTest from './pages/PracticeTest'
import VideoLecture from './pages/VideoLecture'
import MockTest from './pages/MockTest'
import Profile from './pages/Profile'
import MyCourses from './pages/MyCourses'
import ExploreCourses from './components/courses/ExploreCourses'
import PublishCourses from './pages/PublishCourses'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/explore-courses' element={<ExploreCourses/>}/>
      <Route path='/practice-test' element={<PracticeTest/>}/>
      <Route path='/mock-tests' element={<MockTest/>}/>
      <Route path='/publish-courses' element={<PublishCourses/>}/>
      
      {/* Protected Routes */}
      <Route path='/profile' element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
      }/>
      <Route path='/my-courses' element={
        <ProtectedRoute>
          <MyCourses/>
        </ProtectedRoute>
      }/>
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
     
      <Route path='/video-lectures' element={
        <ProtectedRoute>
          <VideoLecture/>
        </ProtectedRoute>
      }/>
    </Routes>
  )
}

export default App
