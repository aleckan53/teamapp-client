import config from '../config'

const ProjectsService = {
  getUserProjectsList(id) {
    return fetch(`${config.API_ENDPOINT}/projects/user/${id}`)
      .then(res=> !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json())
  },
  getAllProjects(term="", page=1){
    return fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`)
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
  },
  getProjectById(id){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`)
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
  },
  uploadProject(context, routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
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
  },
  updateProject(context, routerProps, project){
    return fetch(`${config.API_ENDPOINT}/projects/${project.projectId}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
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
  },
  deleteProject(context, routerProps, projectId){
    fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
      method: 'DELETE'
    })
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))  
        : res.json())
      .then(()=> {
        context.deleteProject(projectId)
        routerProps.history.push('/projects')
      })
  },
}

export default ProjectsService