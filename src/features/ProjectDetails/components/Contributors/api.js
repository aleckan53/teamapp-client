import config from 'config'
import TokenService from 'services/TokenService'

export default {
  getContributors (project_id) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_id}/contributors`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .catch(err => console.error(err))
  }
}