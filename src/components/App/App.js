import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PrivateRoute from '../Routes/PrivateRoute'
import { ThemeSwitch, Error } from '../Basic/Basic'
import EventsContext from '../../context/EventsContext'
import ThemeContext from '../../context/ThemeContext'
import route from '../../routes'

const App = () => {
  const theme = useContext(ThemeContext)
  const { error, errorMsg } = useContext(EventsContext)

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Error msg={errorMsg} error={error}/>
        <Switch>
          
          <PrivateRoute path='/projects/add' component={route.AddProject}/>
          <PrivateRoute path='/projects/:id/edit' component={route.EditProject}/>
          <PrivateRoute path='/projects/:id' component={route.ProjectDetails}/>
          <PrivateRoute path='/projects' component={route.ProjectsList}/>
          <PrivateRoute path='/requests' component={route.Requests}/>
          <PrivateRoute path='/account' component={route.Account}/>
          <PrivateRoute path='/search' component={route.Search}/>
          <Route path="/signup" component={route.SignUpPage}/>
          <Route path="/login" component={route.LoginPage}/>
          <Route exact path='/' component={route.LandingPage}/>
          <Route component={route.NotFound}/>
        </Switch>
      </main>
      <ThemeSwitch 
        checked={theme.dark}
        onChange={() => theme.toggle()}/>
    </div>
  )
}

export default App
