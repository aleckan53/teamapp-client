import React, { Component } from 'react'
import UsersService from '../services/UsersService'

const UsersContext = React.createContext({
  userInfo: {},
  setUserInfo: ()=>{},
})

export default UsersContext

export class UsersProvider extends Component {
  state = {
    userInfo: {},
  }

  componentDidMount() {
    UsersService.getMainUserData(1)
      .then(res=> this.setUserInfo(res[0]))
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
    }

    return (
      <UsersContext.Provider value={value}>
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}