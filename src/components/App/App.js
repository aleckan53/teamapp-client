import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import ProjectService from '../ProjectService/ProjectService'
import AppContext from '../../context/AppContext' 
import Account from '../../routes/Account/Account'
import ProjectsList from '../../routes/ProjectsList/ProjectsList'
import Search from '../../routes/Search/Search'
import ApiService from '../../services/api-service'
import NotFound from '../../routes/NotFound/NotFound'
import './App.css'
import { UploadForm, UpdateForm } from '../ProjectService/CreateForm'

class App extends Component {

 static contextType = AppContext

  componentDidMount(){
    ApiService.getOwnerData()
      .then(res=> {
        this.context.setInitialData(res)
      })
      .catch(err=> this.setState({error: err}))
  }

  render() {
    return <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route path='/add-project' component={UploadForm}/>
          <Route path='/projects/:id/edit' render={props=><ProjectService {...props} edit={true}/>}/>
          <Route path='/projects/:id' component={ProjectDetails}/>
          <Route path='/projects' component={ProjectsList}/>
          <Route path='/account' component={Account}/>
          <Route path='/search' component={Search}/>
          {/* <Route component={NotFound}/> */}
        </Switch>
      </main>
    </div>
  }
}

export default App
