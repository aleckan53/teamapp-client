import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { Dot } from 'features/Basic'
import context from 'context'
import TokenService from 'services/TokenService'

const NavBar = props => {
  
  const { outgoing, incoming } = useContext(context.Events).requests
  const count = outgoing.length + incoming.length

  return !(TokenService.getAuthToken()) ? '' : (
    <nav id='navBar' className={styles.navBar}>
      <NavLink to='/search'>Search</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/requests'>Requests{!count ? '' : <Dot/>}</NavLink>
      <NavLink to='/account'>Account</NavLink>
    </nav>
  )
}

export default NavBar