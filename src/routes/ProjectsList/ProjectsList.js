import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle as icon } from 'react-icons/io'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectsContext from '../../context/ProjectsContext'
import { Header, HeaderBtn } from '../../components/Basic/Basic'
 
const ProjectsList = props => {

  const context = useContext(ProjectsContext)

  return (
    <section className="ProjectsList">
      <Header h1='Projects'>
        <Link to="/projects/add">
          <HeaderBtn icon={icon}/>
        </Link>        
      </Header>
      {
        !context.projectsList ? '' :
          context.projectsList.map((project, i)=>
            <ProjectCard 
              key={i} 
              project={project}/>)
      }
    </section>
  )
}

export default ProjectsList

