import React, { useState, useEffect, useContext } from 'react'
import './ProjectDetails.css'
import config from '../config'

import Hero from '../Hero/Hero'
import AppContext from '../AppContext';

const ProjectDetails = props => {

  const context = useContext(AppContext)

  const [currentProject, setCurrentProject] = useState({
    ready: false,
    project: {}
  })


  const loadProject=()=>{
    fetch(`${config.API_ENDPOINT}/projects/${props.match.params.id}`)
      .then(res=> res.json())
      .then(res=> setCurrentProject({
        ready: true,
        project: res[0]
      }))
  }

  useEffect(()=> {
    Object.entries(props.currentProject).length !== 0 
      ? setCurrentProject({
          project: props.currentProject,
          ready: true
        })
      : loadProject()
  }, [])

  const checkOwn = context.ownerProjects.some(proj=>{
    return proj.id === currentProject.project.id
  })

  return !currentProject.ready ? '' : <div className="ProjectDetails">
    <Hero project={currentProject.project} editable={checkOwn} projectId={currentProject.project.id}/>
    <section>
      <button>Bookmark</button>
      <button>Share</button>
      <button>Request</button>
    </section>
    <section>
      <p>{currentProject.project.description}</p>
    </section>
  </div>

}

export default ProjectDetails