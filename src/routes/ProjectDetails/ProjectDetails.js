import React, { useEffect, useContext, useState } from 'react'
import ProjectsService from '../../services/ProjectService'
import ProjectsContext from '../../context/ProjectsContext'
import Hero from '../../components/Hero/Hero'
import Contributors from '../../components/Contributors/Contributors'
import { TitledText } from '../../components/Basic/Basic'

const ProjectDetails = props => {
  const { setCurrentProject, currentProject } = useContext(ProjectsContext)

  const [state, setState] = useState({})

  useEffect(()=> { 
    if(!Object.entries(currentProject).length) {
      ProjectsService.getProjectById(props.match.params.id)
        .then(res => {
          setState(res)
        })
    } else {
      setState(currentProject)
    }
    return () => {
      setCurrentProject({})
    }
  }, [])
  return (
    <div className="ProjectDetails">
      <Hero 
        id={props.match.params.id}
        show={state.userCanEdit}
        img={state.img}
        heading={state.title}/>
      <section>    
        <TitledText
          title="Description"
          content={state.description}/>
        <Contributors
          leader_id={state.leader_id}
          project_id={props.match.params.id}/>
      </section>
    </div>
  )
}

export default ProjectDetails