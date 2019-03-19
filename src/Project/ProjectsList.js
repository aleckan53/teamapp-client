import React from 'react'
import './ProjectsList.css'
import { Link } from 'react-router-dom'
import { IoMdAddCircle } from 'react-icons/io'

import ProjectCard from './ProjectCard'
 
const ProjectsList = props => {
  return <section className="ProjectsList">
    <header>
      <h1>Projetcs</h1>
      <Link to="/add-project" className="add"><IoMdAddCircle/></Link>
    </header>
    <div className="ProjectsList__scrollable">
      {props.projects.map((project, i)=>
        <ProjectCard 
          key={i} 
          {...project} 
          details={project}/>)}
    </div>
  </section>
}

export default ProjectsList