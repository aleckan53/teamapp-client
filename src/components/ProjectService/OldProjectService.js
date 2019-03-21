import React, { useState, useContext, useEffect } from 'react'
import ApiService from '../../services/api-service'
import AppContext from '../../context/AppContext'
import './ProjectService.css'

const ProjectService = props => {
  const context = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState({})

  useEffect(() => {
    const projectIndex = context.ownerProjects.findIndex(p=>p.id===Number(props.match.params.id))
    context.setCurrentProject(context.ownerProjects[projectIndex])
    if(props.edit && projectIndex >= 0) {
      context.setCurrentProject(context.ownerProjects[projectIndex])
    }
  }, [context.ownerProjects])
  
  useEffect(()=>{
    if (context.currentProject && props.edit) {
      setTitle(context.currentProject.title)
      setImg(context.currentProject.img)
      setDescription(context.currentProject.description)  
    }
  }, [context.currentProject])

  const handleSubmit = (e, proj) => {
    e.preventDefault()
    console.log(e.target.delete)
    e.target.delete
      ? ApiService.deleteProject(proj.project_id)
        .then(()=> {
          context.deleteProject(proj.project_id)
          props.history.push('/projects')
        })
    : !props.edit
      ? ApiService.uploadProject(proj)
        .then(res=> {
          context.addNewProject(res)
          context.setCurrentProject(res)
          props.history.push(`/projects/${res.id}`)
        }) 
      : ApiService.updateProject(proj.project_id, proj)
        .then(res=> {
          context.updateProject(res)
          props.history.goBack()
        })
  }

  return <section className="ProjectService">
    <form 
      onSubmit={e => handleSubmit(e, {
          title,
          img,
          description,
          owner_id: context.owner.id,
          project_id: props.match.params.id,
        })}
      id="ProjectServiceForm">
      <fieldset>
        <legend>{props.edit ? 'Edit project' : 'Add Project'}</legend>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={e => setTitle(e.currentTarget.value)}
            value={title}
            required
            id="title" 
            type="text"/>
        </div>
        <div>
          <label htmlFor="upload-img">Image link</label>
          <input 
            onChange={e => setImg(e.currentTarget.value)}
            value={img}
            required
            id="upload-img" 
            type="text"/>
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <textarea 
            required
            onChange={e => setDescription(e.currentTarget.value)}
            value={description}
            form="ProjectServiceForm"
            id="description"/>
        </div>
        <input type="submit" name="submit" value="Submit"/>
        {!props.edit ? '' :  <input type="submit" name="delete" value="Delete"/>}
      </fieldset>
    </form>

  </section>
}
export default ProjectService