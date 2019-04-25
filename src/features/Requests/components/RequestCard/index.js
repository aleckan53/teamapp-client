import React from 'react'
import styles from './styles.module.css'
import { Btn, ReqStatus } from 'features/Basic'
import RequestsService from 'services/RequestsService'
import { IoMdArrowDown as Down, IoMdArrowUp as Up } from 'react-icons/io'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const RequestCard = {
  Incoming(props) {
    return (
      <div className={styles.reqCard}>
        <div className={styles.btnContainer}>
          <Down className={styles.iconDown}/>
        </div>
        <div className={styles.body}>
          <Link to={`/projects/${props.project_id}`}>
            <p>{props.title.slice(0,30)}</p>
          </Link>
          <p>{`From: ${props.first_name} ${props.last_name}`}</p>
          <p>{generateDate(props.created_at)}</p>
        </div>
        <div className={styles.btnContainer}>
          <Btn
            onClick={()=> RequestsService.updateRequest(props.id, 'Accepted')}
            title='Accept'
            className={styles.btn}/>
          <Btn
            onClick={()=> RequestsService.updateRequest(props.id, 'Declined')}
            title='Decline'
            className={styles.btn}/>
        </div>
      </div>
    )
  },
  Outgoing(props) {
    return (
      <div className={styles.reqCard}>
        <div className={styles.btnContainer}>
          <Up className={`${styles.iconUp} ${props.status}`}/>
        </div>
        <div className={styles.body}>
        <Link to={`/projects/${props.project_id}`}>
          <p>{props.title.slice(0,30)}</p>
        </Link>
          <p>{`To: ${props.first_name} ${props.last_name}`}</p>
          <p>{generateDate(props.created_at)}</p>
        </div>
        <div className={styles.btnContainer}>
          <ReqStatus status={props.status}/>
          <Btn
            onClick={()=> RequestsService.deleteRequest(props.id)}
            title={props.status !== 'Pending' ? 'Archive' : 'Cancel'}
            className={styles.btn}/>
        </div>
      </div>
    )
  },
}

function generateDate(date) {
  return new Date(date)
    .toLocaleDateString('en-US', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'}
    )
}

Object.keys(RequestCard).forEach(type => {
  RequestCard[type].propTypes = {
    project_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['Pending', 'Accepted', 'Declined']),      
  }
})


export default RequestCard