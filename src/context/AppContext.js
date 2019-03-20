import React, { Component } from 'react'

const AppContext = React.createContext({
  owner: {},
  ownerProjects: [],
  currentProject: {},
  error: null,
  setCurrentProject: ()=>{},
  addNewProject: ()=>{},
  updateProject: ()=>{},
  removeProject: ()=>{},
})

export default AppContext

export class AppProvider extends Component {
  state = {
    owner: {},
    ownerProjects: [],
    currentProject: {},
    error: null,
  }
  
  setInitialData = (data) => {
    this.setState({
      owner: data.owner,
      ownerProjects: data.user_projects,
    })
  }

  setCurrentProject = (currentProject) => {
    this.setState({
      currentProject
    })
  }

  addNewProject = newProject => {
    this.setState({
      ownerProjects: [...this.state.ownerProjects, newProject]
    })
  }

  updateProject = updatedProject => {
    const oldProjects = this.state.ownerProjects.filter(proj => 
      proj.id !== updatedProject.id
    )
    
    this.setState({
      ownerProjects: [...oldProjects, updatedProject].sort((a,b) => (a.id>b.id) ? 1 : ((b.id>a.id) ? -1 : 0))
    })

    this.setCurrentProject({
      ...updatedProject,
      ownerRole: 'owner'
    })
  }

  removeProject = id => {
    const projectsList = this.state.ownerProjects.filter(proj =>
      proj.id !== Number(id)  
    )

    this.setState({
      ownerProjects: [...projectsList]
    })
  }


  render() {
    const value = {
      owner: this.state.owner,
      ownerProjects: this.state.ownerProjects,
      currentProject: this.state.currentProject,
      error: this.state.error,
      setCurrentProject: this.setCurrentProject,
      addNewProject: this.addNewProject,
      updateProject: this.updateProject,
      removeProject: this.removeProject,
      setInitialData: this.setInitialData,
    }

    return <AppContext.Provider value={value}>
      {this.props.children}
    </AppContext.Provider>
  }
}