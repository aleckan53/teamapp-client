import React from 'react'
import ReactDOM from 'react-dom'
import Account from './index.js'
import { create } from 'react-test-renderer'

describe('Account component', () => {
  it('renders without crushing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Account/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const component = create(<Account/>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
