import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle as icon } from 'react-icons/io'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectsContext from '../../context/ProjectsContext'
import { Header, HeaderBtn, Msg } from '../../components/Basic/Basic'
 
const ProjectsList = props => {

  const context = useContext(ProjectsContext)
  const projectsCount = context.projectsList.length || 0
  
  return (
    <section className="ProjectsList">
      <Header h1='Projects'>
        <Link to="/projects/add">
          <HeaderBtn icon={icon}/>
        </Link>        
      </Header>
      {!projectsCount
        ? <Msg text="Your projects appear here"/>
        : context.projectsList.map((project, i)=>
            <ProjectCard 
              to={`/projects/${project.id}`}
              key={i} 
              project={project}/>)}
    </section>
  )
}

export default ProjectsList

