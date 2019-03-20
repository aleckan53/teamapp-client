import config from '../config'

const ApiService = {
  getOwnerData(){
    return fetch(`${config.API_ENDPOINT}/start`)
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getNotifications(id){
    return fetch(`${config.API_ENDPOINT}/notifications?id=${id}`)
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  getAllProjects(term="", page=1){
    return fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`)
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getProjectById(id){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`)
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateProject(id, changes){
    return fetch(`${config.API_ENDPOINT}/projects/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(changes)
    })
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  uploadProject(project){
    return fetch(`${config.API_ENDPOINT}/projects/add`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteProject(id){
    fetch(`${config.API_ENDPOINT}/projects/${id}`, {
      method: 'DELETE'
    })
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  }
}

export default ApiService