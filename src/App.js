import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from './config'
 
import './App.css'
import { NavBar } from './NavBar/NavBar'
import { Account } from './Account/Account'
import { Notifications } from './Notifications/Notifications'
import { ProjectsList } from './ProjectsList/ProjectsList'
import { Search } from './Search/Search'
import { ProjectCard } from './Project/ProjectCard'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
      notifications: [],
    }
  }

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/owner`)
      .then(res=> res.json())
      .then(res=> this.setState({
        ...res
      }))
      .catch(err=> Promise.reject(err.message))
  }

  render() {
    const { owner, notifications, projects } = this.state
    return (
      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Route path='/account' render={props=><Account {...props} {...owner}/>}/>
          <Route path='/notifications' render={props=><Notifications {...props} notifications={notifications}/>}/>
          <Route path='/projects' render={props=><ProjectsList {...props} projects={projects}/>}/>
          <Route path='/search' render={props=><Search {...props}/>}/>
          <Route path='/project-:id' render={props=><ProjectCard {...props} projects={projects}/>}/>
        </main>
      </div>
    )
  }
}

export default App
