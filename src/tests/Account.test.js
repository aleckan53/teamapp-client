import React from 'react'
import ReactDOM from 'react-dom'
import Account from '../routes/Account/Account'
import { shallow, mount } from 'enzyme'
import TokenService from '../services/TokenService'
import renderer from 'react-test-renderer'
import { BrowserRouter, Route } from 'react-router-dom'
 
describe('Account component', () => {

  it('shold render UI as expected', () => {
    const tree = renderer.create(<Account/>).toJSON()
    expect(tree).toMatchSnapshot()

  })

  it('clears authToken when log out btn is pressed', () => {
    TokenService.saveAuthToken('test')
    
    const account = mount(<Account history={{push: jest.fn()}}/>)

    console.log(account.debug())
    account.find('HeaderBtn').at(0).simulate('click')
  })
})