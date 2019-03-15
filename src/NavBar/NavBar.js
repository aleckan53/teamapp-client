import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = props => {
  const [showMenu, setMenu] = useState(false)

  return <div className="NavBar">
    <div>
      <Link to="/dashboard">
        <img id="avatar" src="http://www.ieeeaustsb.org/files/2015/01/placeholder-male.png" alt="avatar"/>
      </Link>
    </div>
    <div>
      Logo
    </div>
    <div>
      <button 
        className="menu-btn"
        onClick={()=>setMenu(!showMenu)}
      >
      </button>
    </div>
  </div>
}