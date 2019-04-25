import React from 'react'
import { Btn } from 'features/Basic'
import PropTypes from 'prop-types'
import Api from './api'

const JoinBtn = props => {

  const handleJoin = (lead, proj) => {
    Api.sendJoinRequest(lead, proj)
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