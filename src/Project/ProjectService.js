import React, { useState, useContext, useEffect } from 'react'
import config from '../config'
import './ProjectService.css'

import AppContext from '../AppContext';

const ProjectService = props => {

  const [project, setProject] = useState({
    title: '',
    description: '',
    img: '',
    owner_id: props.ownerId,
    project_id: Number(props.match.params.id)
  })

  const context = useContext(AppContext)

  useEffect(()=>{
    if(props.editMode) {
      const fields = context.ownerProjects.find(proj=> proj.id === Number(props.match.params.id))
      setProject({
        ...project,
        title: fields.title,
        description: fields.description,
        img: fields.img,
      })  
    }
  }, [])

  const editProject = e => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/projects/${props.match.params.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res=> res.json())
      .then(res=> {
        context.updateProject(res)
        props.history.goBack()
      })
  }

  const uploadProject = e => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      .then(res=> res.json())
      .then(res=> {
        context.addNewProject(res)
        props.history.goBack()
      })
  }
  return <section className="ProjectService">
    <form id="ProjectServiceForm"onSubmit={(e)=>props.editMode ? editProject(e) : uploadProject(e)}>
      <fieldset>
          {props.editMode ? <legend>Edit project</legend> : <legend>Add new project</legend>}
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={project.title} 
            id="title" 
            type="text" 
            onChange={(e)=>setProject({...project, title: e.currentTarget.value})}/>
        </div>
        <div>
          <label htmlFor="upload-img">Image link</label>
          <input 
            value={project.img} 
            id="upload-img" 
            type="text" 
            onChange={(e)=>setProject({...project, img: e.currentTarget.value})}/>
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <textarea 
            form="ProjectServiceForm"
            value={project.description} 
            id="description" 
            onChange={(e)=>setProject({...project, description: e.currentTarget.value})}/>
        </div>
        <input type="submit"/>
      </fieldset>
    </form>
  </section>
}

export default ProjectService