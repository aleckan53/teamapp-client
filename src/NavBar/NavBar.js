import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = props => {
  const navItems = ['search', 'projects', 'notifications', 'account']
  
  return <div className="NavBar">
    {navItems.map((link,i)=>{
      return (
        <NavLink 
          to={`/${link}`}
          key={i}>
          <div>{link.charAt(0).toUpperCase()+link.slice(1)}</div>
        </NavLink>
      )
    })}
  </div>
}