import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

export const ProjectCard = props => {

  console.log(props)
  return <Link to={`/project-${props.id}`}>
    <div className="Project">
      <div 
        style={{
          backgroundPosition: "center",
          backgroundSize: `cover`,
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.image})`
        }}
        className="Project__card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>
}