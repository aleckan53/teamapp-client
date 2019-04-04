import React from 'react'
import styles from './RequestCard.module.css'
import { Btn } from '../Basic/Basic'
import RequestsService from '../../services/RequestsService'
import { IoMdArrowDown as Down, IoMdArrowUp as Up } from 'react-icons/io'

const RequestCard = {
  Incoming(props) {
    const updateRequest = RequestCard.updateRequest
    const generateDate = RequestCard.generateDate
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
            onClick={()=> updateRequest(props, 'Accepted')}
            title='Accept'
            className={styles.btn}/>
          <Btn
            onClick={()=> updateRequest(props, 'Declined')}
            title='Decline'
            className={styles.btn}/>
        </div>
      </div>
    )

  },
  Outgoing(props) {
    const updateRequest = RequestCard.updateRequest
    const generateDate = RequestCard.generateDate

    return (
      <div className={styles.reqCard}>
        <div className={styles.btnContainer}>
          <Up className={styles.iconUp}/>
        </div>
        <div className={styles.body}>
          <p>{props.title}</p>
          <p>{`To: ${props.first_name} ${props.last_name}`}</p>
          <p>{generateDate(props.created_at)}</p>
        </div>
        <div className={styles.btnContainer}>
          <Btn
            onClick={()=> updateRequest(props, 'Canceled')}
            title='Cancel'
            className={styles.btn}/>
        </div>
      </div>
    )
  },
  updateRequest(props, status) {
    RequestsService.updateRequest(props.id, {
      status,
      project_id: props.project_id,
      user_id: props.sender_id,
      request_id: props.id,
    })
  },
  generateDate(date) {
    return new Date(date)
      .toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'}
      )
  }
}

export default RequestCard