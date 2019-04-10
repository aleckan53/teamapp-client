import React, { useState } from 'react'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'

const JoinBtn = props => {
  const [sent, setSent] = useState()

  const handleJoin = (lead, proj) => {
    setSent(true)
    RequestsService.sendJoinRequest(lead, proj)
    props.history.push('/requests')
  }

  return sent ? '' : (
    <Btn
      title='Join project'
      onClick={()=> handleJoin(props.leader_id, props.project_id)} 
      {...props}/>
  )
}

export default JoinBtn