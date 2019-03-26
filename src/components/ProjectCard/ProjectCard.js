import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import ProjectsContext from '../../context/ProjectsContext'
import { CustomLoader } from '../Basic/Basic'

const ProjectCard = props => {
  const context = useContext(ProjectsContext)
  const bgImage = {backgroundImage: `url(${props.project.img})`}
  
  return (
    <Link 
      onClick={()=> context.setCurrentProject(props.project)}
      to={`/projects/${props.project.id}`}>
      <div 
        className={styles.projectCard}
        style={bgImage}>
        <h2>{props.project.title}</h2>
        <CustomLoader className={styles.loader}/>
      </div>
    </Link>
  )
}

export default ProjectCard