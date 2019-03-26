import React, { Component } from 'react'
import ProjectsService from '../services/ProjectService'
import TokenService from '../services/TokenService'

import UsersContext from './UsersContext';

const ProjectsContext = React.createContext({
  error: null,
  currentProject: {},
  projectsList: [],
  setCurrentProject: ()=>{},
  setProjectsList: ()=>{},
  addProject: ()=>{},
  updateProject: ()=>{},
  deleteProject: ()=>{},
  getUserProjects: ()=>{},
})

export default ProjectsContext

export class ProjectsProvider extends Component {
  state = {
    error: null,
    currentProject: {},
    projectsList: [],
  }

  static contextType = UsersContext

  componentDidMount() {
    if (TokenService.getAuthToken()) {
      this.getUserProjects()
    }
  }

  getUserProjects = () => {
    ProjectsService.getUserProjectsList()
      .then(res=> this.setProjectsList(res))
      .catch(err=> console.log(err))
  }

  setCurrentProject = currentProject => {
    this.setState({currentProject})
  }

  setProjectsList = projectsList => {
    this.setState({projectsList})
  }

  addProject = project => {
    this.setState({
      projectsList: [...this.state.projectsList, project]
    })
  }
  updateProject = project => {
    const oldProjects = this.state.projectsList.filter(p => 
      p.id !== project.id
    )
    // change to sort by rating
    this.setState({
      projectsList: [...oldProjects, project].sort((a,b) => (a.id>b.id) ? 1 : ((b.id>a.id) ? -1 : 0))
    })

  }
  deleteProject = projectId => {
    const newProjectsList = this.state.projectsList.filter(p =>
      p.id !== projectId 
    )

    this.setState({
      projectsList: [...newProjectsList]
    })
  }

  render() {
    const value = {
      error: this.state.error,
      currentProject: this.state.currentProject,
      projectsList: this.state.projectsList,
      setCurrentProject: this.setCurrentProject,
      setProjectsList: this.setProjectsList,
      addProject: this.addProject,
      updateProject: this.updateProject,
      deleteProject: this.deleteProject,
      getUserProjects: this.getUserProjects,
    }
    return (
      <ProjectsContext.Provider value={value}>
        {this.props.children}
      </ProjectsContext.Provider>
    )
  }
}

