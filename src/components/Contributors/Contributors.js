import React, { useEffect, useState } from 'react'
import styles from './Contributors.module.css'
import ProjectsService from '../../services/ProjectService';

const Contributors = props => {

  const [state, setState] = useState([])

  useEffect(()=> {
    ProjectsService.getContributorsList(props.project_id)
      .then(res=> setState(res))
  }, [])

  return (
    <div>
      <h3>Contributors</h3>
      <div className={styles.contributorsList}>
        {state.map((c,i)=> {
          return (
            <Contributor
              key={i}
              img={c.avatar}
              name={`${c.first_name} ${c.last_name}`}
              title={c.title}/>
          )
        })}
      </div>
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