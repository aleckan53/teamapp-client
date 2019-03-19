import React, { useState, useEffect } from 'react'
import './Notifications.css'
import config from '../config'

import { IoMdTrash } from 'react-icons/io'
 
const Notifications = props =>{

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