import config from 'config'
import TokenService from 'services/TokenService'

export default {
  getAllProjects(term="", page=1) {
    return fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e))
        : res.json())
      .catch(err => console.error(err))
  },
}