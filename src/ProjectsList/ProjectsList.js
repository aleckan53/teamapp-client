import React from 'react'
import { ProjectCard } from '../Project/ProjectCard'

export const ProjectsList = props => {
  return <div className="ProjectsList">
    <header>
      <h2>Projetcs</h2> 
    </header>
    {props.projects.map(project=>{
      return <ProjectCard {...project}/>
    })}
  </div>
}