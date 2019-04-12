import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext'
import { ThemeProvider } from './context/ThemeContext'
import { EventsProvider } from './context/EventsContext' 
import './index.css'

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <EventsProvider>
        <ProjectsProvider>
          <App/>
        </ProjectsProvider>
      </EventsProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)

