import config from 'config'
import TokenService from 'services/TokenService'

export default {
  uploadProject(history, project){
    return fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      }})
      .then(res => !res.ok ? res.json().then(Promise.reject) : res.json())
      .then(res => history.push(`/projects/${res.id}`))
      .catch(err => console.error(err))
  },
}