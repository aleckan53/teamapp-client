import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.render(
  <Router>
    <ThemeProvider>
        <ProjectsProvider>
          <App/>
        </ProjectsProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)

