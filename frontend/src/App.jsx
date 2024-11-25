
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/login'
import Contact from './pages/Contact'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
