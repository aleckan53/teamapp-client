import config from '../config'
import TokenService from '../services/TokenService'

const RequestsService = {
  sendJoinRequest(recipient_id, project_id, usersContext) {
    return fetch(`${config.API_ENDPOINT}/requests/projects/${project_id}`, {
      method: 'POST',
      body: JSON.stringify({recipient_id}), 
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(res=> !res.ok ? res.json().then(e=> Promise.reject(e)) : res.json())
      .then(res=> usersContext.setUserInfo({
        ...usersContext.userInfo,
        outgoing: [...usersContext.userInfo.outgoing, res]
      }))
  },
  updateRequest(req_id, data) {
    return fetch(`${config.API_ENDPOINT}/requests/${req_id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
    .then(res=> !res.ok ? res.json().then(e=> Promise.reject(e)) : res.json())
    .catch(err=> console.log(err))
  },
  deleteRequest(req_id) {
    return fetch(`${config.API_ENDPOINT}/requests/${req_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res=> !res.ok ? res.json().then(e=> Promise.reject(e)) : res.json())
  }
}

export default RequestsService