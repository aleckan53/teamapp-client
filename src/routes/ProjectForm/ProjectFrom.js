import React, { useContext, useEffect, useState } from 'react'
import ProjectsContext from '../../context/ProjectsContext'
import ProjectService from '../../services/ProjectService'
import UsersContext from '../../context/UsersContext'
import FormTemplate from '../../components/FormTemplate/FormTemplate'


function ProjectForm (WrappedComponent, mainProps) {
  return (props) => {
    const projectsContext = useContext(ProjectsContext)
    const usersContext = useContext(UsersContext)

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState('')
    const [projectId, setProjectId] = useState('')
    const [deleteMode, setDeleteMode] = useState(false)

    useEffect(()=> {
      setUserId(usersContext.userInfo.id)
    }, [usersContext])

    useEffect(()=> {
      setProjectId(Number(props.match.params.id))
      projectsContext.setCurrentProject(
        projectsContext.projectsList.find(p => p.id === projectId)
      )
    }, [projectsContext.projectsList])

    useEffect(()=> {
      if(projectsContext.currentProject) {
        const { title, img, description } = projectsContext.currentProject
        setTitle(title)
        setImg(img)
        setDescription(description)
      }
    }, [projectsContext.currentProject])

    const handleSubmit = (e) => {
      e.preventDefault()
      if (deleteMode) {
        mainProps.handleDelete(projectsContext, props, projectId)
      } else {
        mainProps.handleSubmit(projectsContext, props, {
          title, img, description, userId, projectId
        })
      }
    }

    return (
      <WrappedComponent
        value={{
          title,
          img,
          description,
        }} 
        setImg={setImg}
        h1={mainProps.h1}
        setTitle={setTitle}
        edit={mainProps.edit}
        handleSubmit={handleSubmit}
        btnTitle={mainProps.btnTitle}
        setDeleteMode={setDeleteMode}
        setDescription={setDescription}>
        {props.children}
      </WrappedComponent>
    )
  }
}

export const AddForm = ProjectForm(FormTemplate, {
  handleSubmit: ProjectService.uploadProject,
  h1: 'Add Project',
  btnTitle: 'Submit',
  edit: false,
})

export const EditForm = ProjectForm(FormTemplate, {
  handleSubmit: ProjectService.updateProject,
  handleDelete: ProjectService.deleteProject,
  h1: 'Edit Project',
  btnTitle: 'Update',
  edit: true,
})