import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from './config'
import AppContext from './AppContext' 

import './App.css'
import { NavBar } from './NavBar/NavBar'
import { Account } from './Account/Account'
import { Notifications } from './Notifications/Notifications'
import { ProjectsList } from './Project/ProjectsList'
import { ProjectDetails } from './Project/ProjectDetails'
import { Search } from './Search/Search'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ready: false,
      owner: {},
      user_projects: [],
      currentProject: {}
    }
  }

  static contextType = AppContext

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/start`)
      .then(res=> res.json())
      .then(res=> this.setState({...res, ready: true}))
      .catch(err=> Promise.reject(err.message))
  }

  setCurrentProject = (currentProject) => {
    this.setState({
      currentProject
    })
  }

  render() {
    console.log(this.state)
    const { owner, user_projects } = this.state
    return (
      <div className="App">
      {
        this.state.ready 
          ? <>
            <AppContext.Provider value={{
              setCurrentProject: this.setCurrentProject,
              currentProject: this.state.currentProject,
            }}>
              <nav>
                <NavBar/>
              </nav>
              <main>
                <Route path='/account' render={props=><Account {...props} owner={owner}/>}/>
                <Route path='/notifications' render={props=><Notifications {...props} ownerId={owner.id}/>}/>
                <Route path='/projects' render={props=><ProjectsList {...props} projects={user_projects}/>}/>
                <Route path='/search' render={props=><Search {...props}/>}/>
                <Route path='/project/:id' render={props=><ProjectDetails {...props} currentProject={this.state.currentProject}/>}/>
              </main>
            </AppContext.Provider>
          </>
          : ''
      }
      </div>
    )
  }
}

export default App
