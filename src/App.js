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
      owner: {
        id: "",
        firstName: "",
        lastName: "",
        img: "",
        email: "",
      },
      user_projects: [
        {
          id: "",
          title: "",
          description: "",
          img: ""
        }      
      ]
    }
  }

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/start`)
      .then(res=> res.json())
      .then(res=> this.setState({...res}))
      .catch(err=> Promise.reject(err.message))
  }

  render() {
    const { owner, user_projects } = this.state
    return (
      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Route path='/account' render={props=><Account {...props} owner={owner}/>}/>
          {/* <Route path='/notifications' render={props=><Notifications {...props} notifications={notifications}/>}/> */}
          <Route path='/projects' render={props=><ProjectsList {...props} projects={user_projects}/>}/>
          <Route path='/search' render={props=><Search {...props}/>}/>
        </main>
      </div>
    )
  }
}

export default App
