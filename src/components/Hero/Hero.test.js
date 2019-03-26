import React from 'react'
import ReactDOM from 'react-dom'
import Hero from './Hero'
import renderer from 'react-test-renderer'

describe('Hero component', ()=> {
  it('renders without crashing', ()=> {
    const div = document.createElement('div')
    ReactDOM.render(<Hero />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders UI as  expected', ()=> {
    const tree = renderer
      .create(
      <Hero
        img="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
        heading="test"/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})