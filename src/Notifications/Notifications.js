import React from 'react'
import './Notifications.css'

export const Notifications = props =>{

  return <div className="Notifications">
    <header>
      <h2>Notifications</h2>
    </header>
    <ul className="Notifications__list">
      {props.notifications.map((n,i)=>{
        return <li key={i}><span>{n.date}</span> {n.title}</li>
      })}
    </ul>
  </div>
}