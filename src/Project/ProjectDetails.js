import React, { useState, useEffect } from 'react'
import './ProjectDetails.css'
import config from '../config'

import { Contributor } from '../Contributor/Contributor'
export const ProjectDetails = props => {

  const [currentProject, setCurrentProject] = useState({
    ready: false,
    project: {}
  })

  const loadProject=()=>{
    fetch(`${config.API_ENDPOINT}/search/project/${props.match.params.id}`)
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

  const project = currentProject.project
  console.log(project)

  return !currentProject.ready ? '' : <div className="ProjectDetails">
    <header
      style={{
        backgroundPosition: "center",
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${project.img})`
      }}
      className="ProjectDetails__hero">
      <h2 className="ProjectDetails__name">{project.title}</h2>
    </header>
    <section>
      <button>Bookmark</button>
      <button>Share</button>
      <button>Request</button>
    </section>
    <section>
      <p>{project.description}</p>
    </section>
    <section>
      Contributors
      <Contributor/>
    </section>
  </div>

}