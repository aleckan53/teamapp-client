import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext'
import { UsersProvider } from './context/UsersContext'
import './index.css'

ReactDOM.render(
  <Router>
    <UsersProvider>
      <ProjectsProvider>
        <App/>
      </ProjectsProvider>
    </UsersProvider>
  </Router>,
  document.getElementById('root')
);

