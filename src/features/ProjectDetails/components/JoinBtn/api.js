import config from 'config'
import TokenService from 'services/TokenService'
 
export default {
  sendJoinRequest(recipient_id, project_id) {
    return fetch(`${config.API_ENDPOINT}/sse/requests`, {
      method: 'POST',
      body: JSON.stringify({recipient_id, project_id}), 
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }})
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
  },
}