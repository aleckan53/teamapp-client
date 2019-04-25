import React, { useEffect, useState, useContext } from 'react'
import styles from './styles.module.css'
import Api from './api'
import JoinBtn from '../JoinBtn'
import context from 'context'
import { Msg } from 'features/Basic'

const Contributors = props => {
  const [state, setState] = useState({
    list: [],
    userJoined: true,
  })

  const { outgoing } = useContext(context.Events).requests
  const requestSent = outgoing.some(req => req.project_id === Number(props.project_id))

  useEffect(()=> {
    Api.getContributors(props.project_id)
      .then(setState)
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
        { state.userJoined || requestSent 
            ? '' 
            : <JoinBtn
            {...props}
            leader_id={props.leader_id}
            project_id={props.project_id}/>
        }
        {!requestSent || state.userJoined? '' : <Msg text={`Awaiting approval`}/>}
    </div>
  )
}

const Contributor = props => {
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