import React, { useContext } from 'react'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'
import ProjectsContext from '../../context/ProjectsContext'
import UsersContext from '../../context/UsersContext'


const JoinBtn = props => {
  const projectsContext = useContext(ProjectsContext)
  const usersContext = useContext(UsersContext)

  const handleJoin = () => {
    const leaderId = projectsContext.currentProject.leader_id
    const projectId = projectsContext.currentProject.id
    RequestsService.sendJoinRequest(leaderId, projectId, usersContext)
  }

  return (
    <Btn
      title='Join project'
      onClick={()=> handleJoin()} 
      {...props}/>
  )
}

export default JoinBtn