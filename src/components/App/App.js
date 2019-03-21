import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import { AddProjectForm, EditProjectForm } from '../ProjectService/ProjectService'
import AppContext from '../../context/AppContext' 
import Account from '../../routes/Account/Account'
import ProjectsList from '../../routes/ProjectsList/ProjectsList'
import Search from '../../routes/Search/Search'
import ApiService from '../../services/api-service'
import NotFound from '../../routes/NotFound/NotFound'
import Notifications from '../../routes/Notifications/Notifications'
import './App.css'

class App extends Component {

 static contextType = AppContext

  render() {
    return !this.context.ready ? '' : <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route path='/add-project' component={AddProjectForm}/>
          <Route path='/projects/:id/edit' component={EditProjectForm}/>
          <Route path='/projects/:id' component={ProjectDetails}/>
          <Route path='/projects' component={ProjectsList}/>
          {/* <Route path='/notifications' component={Notifications}/> */}
          <Route path='/account' component={Account}/>
          <Route path='/search' component={Search}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </div>
  }
}

export default App
