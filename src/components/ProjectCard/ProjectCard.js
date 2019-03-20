import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'
import AppContext from '../../context/AppContext'

const ProjectCard = props => {

  const context = useContext(AppContext)

  return (
    <Link 
      onClick={()=>context.setCurrentProject(props.project)}
      to={`/projects/${props.project.id}`}>
      <div 
        className="ProjectCard"
        style={{ backgroundImage: `url(${props.project.img})`}}>
        <h2>{props.project.title}</h2>
      </div>
    </Link>
  )}

export default ProjectCard