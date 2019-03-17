import React from 'react'
import './ProjectsList.css'

import { ProjectCard } from './ProjectCard'

export const ProjectsList = props => {
  return <div className="ProjectsList">
    <header>
      <h2>Projetcs</h2> 
    </header>
    {props.projects.map((project, i)=>{
      return <ProjectCard key={i} {...project} details={project}/>
    })}
  </div>
}