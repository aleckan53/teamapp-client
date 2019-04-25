import config from 'config'
import TokenService from 'services/TokenService'

export default {
  getUserInfo(setter) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(err => Promise.reject(err)) : res.json())
      .then(setter)
  },
}