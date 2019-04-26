import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './index'
import { create } from 'react-test-renderer'
import { Route, BrowserRouter } from 'react-router-dom'

describe('LandingPage', () => {
  it('renders without crushing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Route><LandingPage/></Route>
      </BrowserRouter>      
      , div)
    ReactDOM.unmountComponentAtNode(div)  
  })

  it('matches the snapshot', () => {
    const tree = create(
      <BrowserRouter>
        <Route><LandingPage/></Route>
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})