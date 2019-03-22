import React, { Component } from 'react'
import ProjectsService from '../services/ProjectService'

const ProjectsContext = React.createContext({
  error: null,
  currentProject: {},
  projectsList: [],
  setCurrentProject: ()=>{},
  setProjectsList: ()=>{},
  addProject: ()=>{},
  updateProject: ()=>{},
  deleteProject: ()=>{},
})

export default ProjectsContext

export class ProjectsProvider extends Component {
  state = {
    error: null,
    currentProject: {},
    projectsList: [],
  }

  componentDidMount() {
    // replace hardcoded value
    ProjectsService.getUserProjectsList(1)  
      .then(res=> this.setProjectsList(res)) 
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
    }
    return (
      <ProjectsContext.Provider value={value}>
        {this.props.children}
      </ProjectsContext.Provider>
    )
  }
}

