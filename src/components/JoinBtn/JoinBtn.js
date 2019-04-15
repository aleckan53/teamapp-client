import React from 'react'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'
import PropTypes from 'prop-types'

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

JoinBtn.propTypes = {
  leader_id: PropTypes.number,
  project_id: PropTypes.number,
}

export default JoinBtn