import React from 'react'
import ReactDOM from 'react-dom'
import Requests from './index.js'
import { create } from 'react-test-renderer'

describe('Account component', () => {
  it('renders without crushing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Requests/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('Given no requests', () => {
    it('renders a message', () => {
      const component = create(<Requests/>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
