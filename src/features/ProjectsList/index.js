import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle as icon } from 'react-icons/io'
import ProjectCard from '../ProjectCard'
import { Header, HeaderBtn, Msg } from '../Basic'
import styles from './styles.module.css'
import Api from './api'
 
const ProjectsList = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    Api.getUserProjectsList()
      .then(setState)
    return () => {
      setState([])
    }
  }, [])

  return (
    <section>
      <Header h1='Projects'>
        <Link to="/projects/add">
          <HeaderBtn icon={icon} style={{position: 'static'}}/>
        </Link>        
      </Header>
      <div className={styles.projectsList}>
        {!state.length
          ? <Msg text="Your projects appear here"/>
          : state.map((project, i) =>
          <ProjectCard 
          key={i} 
          project={project}/>)}
      </div>
    </section>
  )
}

export default ProjectsList

