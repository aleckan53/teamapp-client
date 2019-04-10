import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { Dot } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'

// TODO (!important) #1:
// move EventSrc up the component tree, preferably to the App.js
// and pass down a new events as a props
// -- currently the app has the same eventSrc in Requests.js

const NavBar = props => {

  const [state, setState] = useState(0)

  useEffect(()=> {
    // sse connection
    const src = RequestsService.getRequestsSse()

    src.onmessage = ev => {
      const data = JSON.parse(ev.data)
      // filters out 'accepted' and 'declined' requests
      const pendingOnly = data.incoming.filter(r => r.status === 'Pending')
      setState(pendingOnly.length)
    }

    src.onerror = () => {
      src.close()
    }

    return () => {
      src.close()
    }
  }, [state])

  return <nav className={styles.navBar}>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/requests'>Requests{state > 0 ? <Dot/> : ''}</NavLink>
    <NavLink to='/account'>Account</NavLink>
  </nav>
}

export default NavBar