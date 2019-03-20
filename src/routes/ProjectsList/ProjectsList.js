import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle } from 'react-icons/io'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import AppContext from '../../context/AppContext'
import './ProjectsList.css'
 
const ProjectsList = props => {

  const context = useContext(AppContext)

  return (
  <section className="ProjectsList">
    <header>
      <h1>Projetcs</h1>
      <div className="ProjectsList__addBtn">
        <Link to="/add-project">
          <IoMdAddCircle/>
        </Link>
      </div>
    </header>
    <div className="ProjectsList__scrollable">
      {context.ownerProjects.map((project, i)=>
        <ProjectCard 
          key={i} 
          project={project}/>)}
    </div>
  </section>
)}

export default ProjectsList