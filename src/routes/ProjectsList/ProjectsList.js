import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle as icon } from 'react-icons/io'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { Header, HeaderBtn, Msg } from '../../components/Basic/Basic'
import ProjectsService from '../../services/ProjectService'
import styles from './ProjectsList.module.css'
 
const ProjectsList = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    ProjectsService.getUserProjectsList()
      .then(res => setState(res))
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

