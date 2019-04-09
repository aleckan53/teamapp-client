import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProjectDetails from '../../routes/ProjectDetails/ProjectDetails'
import ProjectsList from '../../routes/ProjectsList/ProjectsList'
import NotFound from '../../routes/NotFound/NotFound'
import Account from '../../routes/Account/Account'
import Search from '../../routes/Search/Search'
import NavBar from '../NavBar/NavBar'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import PrivateRoute from '../Routes/PrivateRoute'
import AddProject from '../../routes/AddProject/AddProject'
import EditProject from '../../routes/EditProject/EditProject'
import Requests from '../../routes/Requests/Requests'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <PrivateRoute path='/projects/add' component={AddProject}/>
          <PrivateRoute path='/projects/:id/edit' component={EditProject}/>
          <PrivateRoute path='/projects/:id' component={ProjectDetails}/>
          <PrivateRoute path='/projects' component={ProjectsList}/>
          <PrivateRoute path='/requests' component={Requests}/>
          <PrivateRoute path='/account' component={Account}/>
          <PrivateRoute path='/search' component={Search}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </div>
  )
}

export default App
