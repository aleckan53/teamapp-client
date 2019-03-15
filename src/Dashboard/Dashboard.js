import React, { useState, useEffect } from 'react'
import { UserProfile } from '../UserProfile/UserProfile'
import { Notifications } from '../Notifications/Notifications'
import { ProjectsList } from '../ProjectsList/ProjectsList'
import config from '../config'

export const Dashboard = props => {

  const [owner, setOwner] = useState({})

  useEffect(()=>{
    fetch(config.API_ENDPOINT)
      .then(res=> res.json())
      .then(res=> setOwner(res))
  }, [])

  console.log(config.API_ENDPOINT)
  return <div className="Dashboard">
    <UserProfile owner={owner}/>
    <Notifications/>
    <ProjectsList/>
  </div>
}