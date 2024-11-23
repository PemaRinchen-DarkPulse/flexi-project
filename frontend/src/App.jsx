
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/login'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
