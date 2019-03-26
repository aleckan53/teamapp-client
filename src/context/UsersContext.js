import React, { Component } from 'react'
import UsersService from '../services/UsersService'
import TokenService from '../services/TokenService'

const UsersContext = React.createContext({
  userInfo: {},
  setUserInfo: ()=>{},
  getUserInfo: ()=>{},
})

export default UsersContext

export class UsersProvider extends Component {
  state = {
    userInfo: {},
  }

  componentDidMount() {
    if (TokenService.getAuthToken()) {
      this.getUserInfo()
    }
  }

  getUserInfo = () => {
    UsersService.getUserInfo()
    .then(res=> this.setUserInfo(res))
    .catch(err=> console.error(err))
  }

  setUserInfo = userInfo => {
    this.setState({
      userInfo
    })
  }

  render () {
    
    const value = {
      userInfo: this.state.userInfo,
      setUserInfo: this.setUserInfo,
      getUserInfo: this.getUserInfo,
    }

    return (
      <UsersContext.Provider value={value}>
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}