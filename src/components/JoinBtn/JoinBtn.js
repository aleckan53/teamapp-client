import React from 'react'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'

const JoinBtn = props => {
  const handleJoin = (leader_id, project_id) => {
    RequestsService.sendJoinRequest(leader_id, project_id)
  }

  return (
    <Btn
      title='Join project'
      onClick={()=> handleJoin(props.leader_id, props.project_id)} 
      {...props}/>
  )
}

export default JoinBtn