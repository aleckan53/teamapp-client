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
  updateProject(routerProps, project, setCurrentProject){
    return fetch(`${config.API_ENDPOINT}/projects/${project.id}`,{
      method: 'PATCH',
      body: JSON.stringify(project),
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(res => {
        setCurrentProject(res)
        routerProps.history.push(`/projects/${res.id}`)
      })
      .catch(err => console.error(err))
  },
  deleteProject(routerProps, project){
    fetch(`${config.API_ENDPOINT}/projects/${project.id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        routerProps.history.push('/projects')
      })
      .catch(err => console.error(err))
  },
}