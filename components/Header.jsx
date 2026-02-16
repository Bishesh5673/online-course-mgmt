import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="  flex justify-between px-20  bg-black p-8  text-white text-2xl font-serif">
      <div className='space-x-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/aboutUs">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
       
      </div>
    </div>
  )
}

export default Header
