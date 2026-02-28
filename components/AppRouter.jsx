import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Courses from '../pages/Courses'
import CourseDetail from '../pages/CourseDetail'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courseDetail' element={<CourseDetail/>} />
      
    </Routes>
  )
}

export default AppRouter
