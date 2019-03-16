import React, { useState, useEffect } from 'react'
import './Notifications.css'
import config from '../config'

export const Notifications = props =>{

  const [data, setData] = useState({
    notifications: [{
      id: '',
      user_id: '',
      text: ''
    }]
  })

  useEffect(()=>{
    fetch(`${config.API_ENDPOINT}/notifications?id=${props.ownerId}`)
      .then(res=> res.json())
      .then(res=> setData({notifications: res}))
      .catch(err=> console.log(err))
  }, [])
  
  return <div className="Notifications">
    <header>
      <h2>Notifications</h2>
    </header>
    <ul className="Notifications__list">
      {
        data.notifications.map((notf,i)=>{
          const date = new Date(notf.date_created).toLocaleString('en-Us', { timeZone: 'UTC' })
          return (
            <li key={i}>
              <span>{date}</span>
              <span>{notf.text}</span>
            </li>
          )
        })
      }
    </ul>
  </div>
}