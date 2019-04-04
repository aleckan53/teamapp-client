import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import TokenService from '../../services/TokenService'
import config from '../../config'
import EventSource from 'eventsource'

const NavBar = props => {
  const [newReqs, setNewReqs] = useState()

  useEffect(() => {
    let source
    if(TokenService.getAuthToken()) {
      source = new EventSource(`${config.API_ENDPOINT}/requests/users`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
      })
  
      source.onmessage = (e)=> {
        const msg = JSON.parse(e.data)
        const reqCount = msg.incoming.length
        setNewReqs(reqCount)
      }
  
      source.onerror = () => {
        source.close()
      }
    } else {
      source.close()
    }

    return ()=> {
      // close connection on unmount
      source.close()
    }

  }, [])


  return <nav className={styles.navBar}>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    <NavLink to='/requests'>Requests{!newReqs ? '' : <span className={styles.newReqs}>{newReqs}</span>}</NavLink>
    <NavLink to='/account'>Account</NavLink>
  </nav>
}

export default NavBar