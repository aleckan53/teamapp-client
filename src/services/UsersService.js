import config from '../config'
import TokenService from './TokenService'

const UsersService = {
  getUserInfo() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res=> !res.ok
        ? res.json().then(err=> Promise.reject(err))
        : res.json()
      )
  },
}

export default UsersService