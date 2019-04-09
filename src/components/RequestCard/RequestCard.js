import React from 'react'
import styles from './RequestCard.module.css'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'
import { IoMdArrowDown as Down, IoMdArrowUp as Up } from 'react-icons/io'
import { Link } from 'react-router-dom'

const RequestCard = {
  Incoming(props) {
    return (
      <div className={styles.reqCard}>
        <div className={styles.btnContainer}>
          <Down className={styles.iconDown}/>
        </div>
        <div className={styles.body}>
          <p>{props.title}</p>
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
          <Up className={styles.iconUp}/>
        </div>
        <div className={styles.body}>
        <Link to={`/projects/${props.project_id}`}>
          <p>{props.title}</p>
        </Link>
          <p>{`To: ${props.first_name} ${props.last_name}`}</p>
          <p>{generateDate(props.created_at)}</p>
        </div>
        <div className={styles.btnContainer}>
          <Btn
            onClick={()=> RequestsService.deleteRequest(props.id)}
            title={props.status}
            className={styles.btn}/>
        </div>
      </div>
    )
  },
}

function generateDate(date) {
  return new Date(date)
    .toLocaleDateString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'}
    )
}


export default RequestCard