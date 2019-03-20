import React, { useState, useContext, useEffect } from 'react'
import './ProjectService.css'

import AppContext from '../../context/AppContext'
import ApiService from '../../services/api-service'

const ProjectService = props => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    img: '',
    project_id: Number(props.match.params.id)
  })

  const context = useContext(AppContext)
  console.log(props.ownerId)
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
    setProject({
      ...project,
      owner_id: context.owner.id
    })
  }, [])



  const handleSubmit = (e, requestType) => {
    e.preventDefault()
  }

  const updateProject = (e, id, changes) => {
    e.preventDefault()
    ApiService.updateProject(id, changes)
      .then(res=> {
        context.updateProject(res)
        props.history.goBack()
      })
  }

  const uploadProject = (e, proj) => {
    e.preventDefault()
    ApiService.uploadProject(proj)
      .then(res=> {
        context.addNewProject(res)
        props.history.push(`/projects/${res.id}`)
      })
  }

  const deleteProject = (e, id) => {
    e.preventDefault(e)
    ApiService.deleteProject(id)
      .then(()=> {
        context.removeProject(id)
        props.history.push('/projects')
      })
  }
  return <section className="ProjectService">
    <form 
      id="ProjectServiceForm"
      onSubmit={
        (e)=>props.editMode ? updateProject(e, props.match.params.id, project) : uploadProject(e, project)}>
      <fieldset>
          {props.editMode ? <legend>Edit project</legend> : <legend>Add new project</legend>}
        <div>
          <label htmlFor="title">Title</label>
          <input
            required
            value={project.title} 
            id="title" 
            type="text" 
            onChange={(e)=>setProject({...project, title: e.currentTarget.value})}/>
        </div>
        <div>
          <label htmlFor="upload-img">Image link</label>
          <input 
            required
            value={project.img} 
            id="upload-img" 
            type="text" 
            onChange={(e)=>setProject({...project, img: e.currentTarget.value})}/>
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <textarea 
            required
            form="ProjectServiceForm"
            value={project.description} 
            id="description" 
            onChange={(e)=>setProject({...project, description: e.currentTarget.value})}/>
        </div>
        <input type="submit"/>
      </fieldset>
    </form>
        {
          !props.editMode ? '' : 
            <form 
              className="delete-form"
              onSubmit={e=> deleteProject(e, props.match.params.id)}>
              <input type="submit" value="Delete"/>
            </form>
        }
  </section>
}

export default ProjectService