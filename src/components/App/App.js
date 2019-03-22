import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AddForm, EditForm } from '../../routes/ProjectForm/ProjectFrom'
import ProjectDetails from '../../routes/ProjectDetails/ProjectDetails'
import Notifications from '../../routes/Notifications/Notifications'
import ProjectsList from '../../routes/ProjectsList/ProjectsList'
import NotFound from '../../routes/NotFound/NotFound'
import Account from '../../routes/Account/Account'
import Search from '../../routes/Search/Search'
import NavBar from '../NavBar/NavBar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <main>
          <Switch>
            <Route path='/projects/add' component={AddForm}/>
            <Route path='/projects/:id/edit' component={EditForm}/>
            <Route path='/projects/:id' component={ProjectDetails}/>
            <Route path='/projects' component={ProjectsList}/>
            <Route path='/notifications' component={Notifications}/>
            <Route path='/account' component={Account}/>
            <Route path='/search' component={Search}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
