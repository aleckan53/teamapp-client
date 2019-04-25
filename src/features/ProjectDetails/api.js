import config from 'config'
import TokenService from 'services/TokenService'

export default {
  getProjectById(id){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
  },
}