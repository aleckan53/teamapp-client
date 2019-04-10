import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { Dot } from '../Basic/Basic'

const NavBar = props => {
  
  return <nav className={styles.navBar}>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/requests'>Requests</NavLink>
    <NavLink to='/account'>Account</NavLink>
  </nav>
}

export default NavBar