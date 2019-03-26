import React from 'react'
import ReactDOM from 'react-dom'
import ProjectsList from './ProjectsList'
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectsContext from '../../context/ProjectsContext'
import renderer from 'react-test-renderer'

describe('ProjectsList component', ()=> {
  it('renders without crashing', ()=> {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <ProjectsList />
      </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders UI as expected', ()=> {
    const tree = renderer
      .create(
        <ProjectsList />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})