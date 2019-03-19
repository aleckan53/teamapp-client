import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import config from './config'
import AppContext from './AppContext' 

import NavBar from './NavBar/NavBar'
import Account from './Account/Account'
import Notifications from './Notifications/Notifications'
import ProjectsList from './Project/ProjectsList'
import ProjectDetails from './Project/ProjectDetails'
import Search from './Search/Search'
import ProjectService from './Project/ProjectService'
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ready: false,
      owner: {},
      user_projects: [],
      currentProject: {},
      darkTheme: false,
    }
  }

  static contextType = AppContext

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/start`)
      .then(res=> res.json())
      .then(res=> {
        this.setState({...res, ready: true})
      })
      .catch(err=> Promise.reject(err.message))
  }

  setCurrentProject = (currentProject) => {
    this.setState({
      currentProject
    })
  }

  changeAppTheme = () =>{
    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  addNewProject = (newProject) => {
    this.setState({
      user_projects: [...this.state.user_projects, newProject]
    })
  }

  updateProject = updatedProject => {
    const oldProjects = this.state.user_projects.filter(proj=> 
      proj.id !== updatedProject.id
    )
    
    this.setState({
      user_projects: [...oldProjects, updatedProject].sort((a,b)=>(a.id>b.id) ? 1 : ((b.id>a.id) ? -1 : 0))
    })

    this.setCurrentProject({
      ...updatedProject,
      ownerRole: 'owner'
    })
  }

  render() {
    const { owner, user_projects } = this.state

    return !this.state.ready ? '' : 
      <AppContext.Provider value={{
        setCurrentProject: this.setCurrentProject,
        currentProject: this.state.currentProject,
        changeAppTheme: this.changeAppTheme,
        darkTheme: this.state.darkTheme,
        addNewProject: this.addNewProject,
        ownerProjects: this.state.user_projects,
        updateProject: this.updateProject,
      }}>
        <NavBar/>
        <main>
          <Route path='/account' render={props=><Account {...props} owner={owner}/>}/>
          <Route path='/notifications' render={props=><Notifications {...props} ownerId={owner.id}/>}/>
          <Route path='/projects' render={props=><ProjectsList {...props} projects={user_projects}/>}/>
          <Route path='/search' render={props=><Search {...props}/>}/>
          <Route path='/add-project' render={props=><ProjectService {...props} ownerId={owner.id}/>}/>
          <Route path='/project/:id/edit' render={props=><ProjectService {...props} ownerId={owner.id} editMode={true}/>}/>
          <Route exact path='/project/:id' render={props=><ProjectDetails {...props} currentProject={this.state.currentProject}/>}/>
        </main>
      </AppContext.Provider>
  }
}

export default App
