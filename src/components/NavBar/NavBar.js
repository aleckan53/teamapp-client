import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = props => {
  
  return <nav className="NavBar">
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/requests'>Requests</NavLink>
    <NavLink to='/account'>Account</NavLink>
  </nav>
}

export default NavBar