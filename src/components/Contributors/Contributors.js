import React, { useEffect, useState, useContext } from 'react'
import styles from './Contributors.module.css'
import ProjectsService from '../../services/ProjectService'
import JoinBtn from '../JoinBtn/JoinBtn'
import EventsContext from '../../context/EventsContext'
import { Msg } from '../Basic/Basic';

const Contributors = props => {
  const [state, setState] = useState({
    list: [],
    userJoined: true,
  })

  const { outgoing } = useContext(EventsContext).requests
  const requestSent = outgoing.some(req => req.project_id === Number(props.project_id))

  useEffect(()=> {
    ProjectsService.getContributorsList(props.project_id)
      .then(res=> setState({
        ...res,
      }))
  }, [])
  return (
    <div>
      <h3>Contributors</h3>
      <div className={styles.contributorsList}>
        { state.list.map((c,i)=> (
          <Contributor
            key={i}
            img={c.avatar}
            name={`${c.first_name} ${c.last_name}`}
            title={c.title}/>
        ))}
      </div>
        { state.userJoined || requestSent ? '' : (
          <JoinBtn
            {...props}
            leader_id={props.leader_id}
            project_id={props.project_id}/>
        )}
        {!requestSent ? '' : <Msg text={`Awaiting approval`}/>}
    </div>
  )
}

export const Contributor = props => {
  const bgImg = {
    backgroundImage: `url(${props.img})`
  }
  return (
    <div className={styles.contributor}>
      <div
        className={styles.image}
        style={bgImg}></div>
      <span className={styles.name}>
        {props.name}
      </span>
      <span className={styles.title}>
        {props.title}
      </span>
    </div>
  )
}

export default Contributors