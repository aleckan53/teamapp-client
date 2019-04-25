import config from 'config'
import TokenService from 'services/TokenService'

export default {
  async getUserProjectsList() {
    const res = await fetch(`${config.API_ENDPOINT}/projects/user`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
    return res.json()
  },
}
