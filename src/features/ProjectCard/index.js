import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import context from 'context'
import { CustomLoader } from '../Basic'
import PropTypes from 'prop-types'

const ProjectCard = props => {
  const { setCurrentProject } = useContext(context.Projects)
  
  const bgImage = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.25) 1%, rgba(0,0,0,0) 65%), url(${props.project.img})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
  }
  
  return (
    <Link 
      onClick={()=> setCurrentProject(props.project)}
      to={`/projects/${props.project.id}`}>
      <div 
        className={styles.projectCard}
        style={bgImage}>
        <h2>{props.project.title || ''}</h2>
        {props.children}
        <CustomLoader className={styles.loader}/>
      </div>
    </Link>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}


export default ProjectCard