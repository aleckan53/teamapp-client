import React, { useState, useContext, useEffect } from 'react'
import ApiService from '../../services/api-service'
import AppContext from '../../context/AppContext'
import ProjectForm from '../ProjectForm/ProjectForm'
import './ProjectService.css'

function FormHOC (Form, props) {
  return class extends React.Component {
    static contextType = AppContext

    state = {
      title: '',
      img: '',
      description: '',
      project_id: '',
      owner_id: this.context.owner.id,
      deleteRequest: false,
    }

    componentDidMount() {
      if(props.type === 'Edit') {
        const id = Number(this.props.match.params.id)
        ApiService.getProjectById(id)
        .then(res => {
          this.setState(...res)
        })
      }
    }
  
    handleSubmit = e => {
      e.preventDefault()
      props.handleSubmit(this.context, this.state, this.props)
    }
  
    render() {
      return (
        <Form
        {...this.props}
        handleSubmit={this.handleSubmit}
        requestType={`${props.type}`}
        value={this.state}
        setDelete={()=>this.setState({deleteRequest: true})}
        setTitle={title=>this.setState({title})} 
        setImg={img=>this.setState({img})} 
        setDescription={description=>this.setState({description})}>
        {props.children}
        </Form>
      )
    }
  }
}

export default FormHOC

const addProps = {
  type: 'Add',
  handleSubmit(context, project, props) {
    ApiService.uploadProject(project)
      .then(res=> {
        context.addNewProject(res)
        context.setCurrentProject(res)
        props.history.push(`/projects/${res.id}`)
      }) 
  }, 
}

const editProps = {
  type: 'Edit',
  handleSubmit(context, project, props) {
    ApiService.updateProject(project.id, project)
      .then(res=> {
        context.updateProject(res)
        context.setCurrentProject(res)
        props.history.push(`/projects/${res.id}`)
      })
  },
}

export const AddProjectForm = FormHOC(ProjectForm, addProps)
export const EditProjectForm = FormHOC(ProjectForm, editProps)

