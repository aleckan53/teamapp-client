import React from 'react'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'

const JoinBtn = props => {

  const handleJoin = (lead, proj) => {
    RequestsService.sendJoinRequest(lead, proj)
  }
  return (
    <Btn
      title='Join project'
      onClick={() => handleJoin(props.leader_id, props.project_id)} 
      {...props}/>
  )
}

export default JoinBtn