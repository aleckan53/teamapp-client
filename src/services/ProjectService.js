import config from '../config'
import TokenService from './TokenService'

const ProjectsService = {
  async getUserProjectsList() {
    const res = await fetch(`${config.API_ENDPOINT}/projects/user`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
    return res.json()
  },
  getAllProjects(term="", page=1) {
    return fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e))
        : res.json())
      .catch(err => console.error(err))
  },
  getProjectById(id){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .catch(err => console.error(err))
  },
  uploadProject(routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(res => routerProps.history.push(`/projects/${res.id}`))
      .catch(err => console.error(err))
  },
  updateProject(context, routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/${project.id}`,{
      method: 'PATCH',
      body: JSON.stringify(project),
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(res => {
        context.updateProject(res)
        context.setCurrentProject(res)
        routerProps.history.push(`/projects/${res.id}`)
      })
      .catch(err => console.error(err))
  },
  deleteProject(context, routerProps, project){
    fetch(`${config.API_ENDPOINT}/projects/${project.id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        context.deleteProject(project.id)
        routerProps.history.push('/projects')
      })
      .catch(err => console.error(err))
  },
  getContributorsList(project_id) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_id}/contributors`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .catch(err => console.error(err))
  }
}
export default ProjectsService