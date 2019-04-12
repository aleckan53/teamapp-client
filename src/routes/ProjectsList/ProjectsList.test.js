import React from 'react'
import ReactDOM from 'react-dom'
import ProjectsList from './ProjectsList'
import { BrowserRouter as Router } from 'react-router-dom'

describe('ProjectsList component', ()=> {
  it('renders without crashing', ()=> {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <ProjectsList />
      </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})