import React, { useState, useEffect } from 'react'
import './Notifications.css'
import ApiService from '../services/api-service'

import { IoMdTrash } from 'react-icons/io'
 
const Notifications = props =>{
  const [error, setError] = useState(null)
  const [data, setData] = useState({
    notifications: [{
      id: '',
      user_id: '',
      text: ''
    }]
  })

  useEffect(()=>{
    ApiService.getNotifications(props.ownerId)
      .then(res=> setData({notifications: res}))
      .catch(error=> this.setError({error}))
  }, [])

  return <section className="Notifications">
    <header>
      <h1>Notifications</h1>
      <IoMdTrash/>
    </header>
    <ul className="Notifications__list">
      {
        data.notifications.map((notf,i)=>{
          const date = new Date(notf.date_created).toLocaleString('en-Us', { timeZone: 'UTC' })
          return (
            <li key={i}>
              <div>
                <span className="__icon"></span>
                <span>{notf.text}</span>
              </div>
              <span>{date}</span>
            </li>
          )
        })
      }
    </ul>
  </section>
}

export default Notifications