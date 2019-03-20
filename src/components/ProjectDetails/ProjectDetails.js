import React, { useState, useEffect, useContext } from 'react'
import './ProjectDetails.css'
import Hero from '../Hero/Hero'
import AppContext from '../../context/AppContext'
import ApiService from '../../services/api-service'

const ProjectDetails = props => {

  const context = useContext(AppContext)
  const [project, setProject] = useState({})

  useEffect(() => {
    if(context.currentProject) {
      Object.entries(context.currentProject).length !== 0 
        ? setProject(context.currentProject)
        : ApiService.getProjectById(props.match.params.id)
            .then(res => {
              setProject(res[0])
              context.setCurrentProject(res[0])
            })
    }
  }, [context.currentProject])

  return <div className="ProjectDetails">
    <Hero 
      img={project.img}
      heading={project.title}
      projectId={props.match.params.id}
      editable={context.ownerProjects.some(proj => proj.id === project.id)}/>
    <section>
      <p>{project.description}</p>
    </section>
  </div>
}

export default ProjectDetails