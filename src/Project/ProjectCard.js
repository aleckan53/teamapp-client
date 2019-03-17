import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'
import AppContext from '../AppContext'

export const ProjectCard = props => {

  const context = useContext(AppContext)
  return <Link 
    onClick={()=>context.setCurrentProject(props.details)}
    className="Project__link" 
    to={`/project/${props.id}`}>
    <div className="Project">
      <div 
        style={{
          backgroundPosition: "center",
          backgroundSize: `cover`,
          backgroundRepeat: "no-repeat",
          backgroundImage: 
            `linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(${props.img})`
        }}
        className="Project__card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>
}