import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { Dot } from '../Basic/Basic'
import EventsContext from '../../context/EventsContext'
import TokenService from '../../services/TokenService'


const NavBar = props => {
  
  const { outgoing, incoming } = useContext(EventsContext).requests
  const count = outgoing.length + incoming.length

  return !(TokenService.getAuthToken()) ? '' : (
    <nav className={styles.navBar}>
      <NavLink to='/search'>Search</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/requests'>Requests{!count ? '' : <Dot/>}</NavLink>
      <NavLink to='/account'>Account</NavLink>
    </nav>
  )
}

export default NavBar