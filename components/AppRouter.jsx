import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Courses from '../pages/Courses'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/courses' element={<Courses/>} />


      
    </Routes>
  )
}

export default AppRouter
