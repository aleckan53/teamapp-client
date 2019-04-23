import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PrivateRoute from '../Routes/PrivateRoute'
import { ThemeSwitch } from '../Basic/Basic'
import ThemeContext from '../../context/ThemeContext'
import routes from '../../routes'

const App = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <PrivateRoute path='/projects/add' component={routes.AddProject}/>
          <PrivateRoute path='/projects/:id/edit' component={routes.EditProject}/>
          <PrivateRoute path='/projects/:id' component={routes.ProjectDetails}/>
          <PrivateRoute path='/projects' component={routes.ProjectsList}/>
          <PrivateRoute path='/requests' component={routes.Requests}/>
          <PrivateRoute path='/account' component={routes.Account}/>
          <PrivateRoute path='/search' component={routes.Search}/>
          <Route path="/signup" component={routes.SignUpPage}/>
          <Route path="/login" component={routes.LoginPage}/>
          <Route exact path='/' component={routes.LandingPage}/>
          <Route component={routes.NotFound}/>
        </Switch>
      </main>
      <ThemeSwitch 
        checked={theme.dark}
        onChange={() => theme.toggle()}/>
    </div>
  )
}

export default App
