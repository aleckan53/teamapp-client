import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = props => {
  return <nav className={styles.navBar}>
    <NavLink className={styles.active} to='/search'>Search</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/requests'>Requests</NavLink>
    <NavLink to='/account'>Account</NavLink>
  </nav>
}

export default NavBar