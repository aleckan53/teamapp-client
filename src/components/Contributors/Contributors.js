import React, { useEffect, useState, useContext } from 'react'
import styles from './Contributors.module.css'
import ProjectsService from '../../services/ProjectService'
import JoinBtn from '../JoinBtn/JoinBtn'
import UsersContext from '../../context/UsersContext'

const Contributors = props => {
  const outgoing = useContext(UsersContext).userInfo.outgoing || []
  const [state, setState] = useState({
    list: [],
    userJoined: true,
    userAwaitsRequest: true,
  })

  useEffect(()=> {
    ProjectsService.getContributorsList(props.project_id)
      .then(res=> setState({
        ...res,
        userAwaitsRequest: outgoing.some(r => r.project_id === Number(props.project_id))
      }))
  }, [])

  return (
    <div>
      <h3>Contributors</h3>
      <div className={styles.contributorsList}>
        {state.list.map((c,i)=> {
          return (
            <Contributor
              key={i}
              img={c.avatar}
              name={`${c.first_name} ${c.last_name}`}
              title={c.title}/>
          )
        })}
      </div>
        { outgoing.some(r => r.project_id === Number(props.project_id)) || 
          state.userJoined ? '' : (
          <JoinBtn
            leader_id={props.leader_id}
            project_id={props.project_id}/>
        )}
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