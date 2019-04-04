import config from '../config'
import TokenService from './TokenService'

const ProjectsService = {
  getUserProjectsList() {
    return fetch(`${config.API_ENDPOINT}/projects/user`, auth)
      .then(res=> !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json())
      .catch(err=> console.error(err))
  },
  getAllProjects(term="", page=1){
    return fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`, auth)
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
      .catch(err=> console.error(err))
  },
  getProjectById(id){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`, auth)
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
      .catch(err=> console.error(err))
  },
  uploadProject(context, routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      headers: {
        'authorization': auth.headers.authorization,
        'content-type': 'application/json',
      },
      body: JSON.stringify(project)
    })
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
      .then(res => {
        context.addProject(res)
        context.setCurrentProject(res)
        routerProps.history.push(`/projects/${res.id}`)
      })
      .catch(err=> console.error(err))
  },
  updateProject(context, routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/${project.id}`,{
      method: 'PATCH',
      headers: {
        'authorization': auth.headers.authorization,
        'content-type': 'application/json',
      },
      body: JSON.stringify(project)
    })
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
      .then(res => {
        context.updateProject(res)
        context.setCurrentProject(res)
        routerProps.history.push(`/projects/${res.id}`)
      })
      .catch(err=> console.error(err))
  },
  deleteProject(context, routerProps, project){
    fetch(`${config.API_ENDPOINT}/projects/${project.id}`, {
      method: 'DELETE',
      headers: auth.headers
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        context.deleteProject(project.id)
        routerProps.history.push('/projects')
      })
      .catch(err=> console.error(err))
  },
  getContributorsList(project_id) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_id}/contributors`, auth)
      .then(res=> !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      )
      .catch(err=> console.error(err))
  }
}

const auth = {
  headers: {
    'authorization': `bearer ${TokenService.getAuthToken()}`
  }
}

export default ProjectsService