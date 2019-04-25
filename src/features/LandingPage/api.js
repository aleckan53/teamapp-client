import config from 'config'
import TokenService from 'services/TokenService'

export default {
  postLogin(credentials, setLoading) {
    setLoading(true)
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json',
      }})
      .then(res => {
        setLoading(false)
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }

        return res.json()
      })
  },
  guestLogin(setAuthorized, history, setLoading) {
    this.postLogin({
      email: config.GUEST_EMAIL,
      password: config.GUEST_PASS,
    }, setLoading)
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        setAuthorized(true)
        history.push('/account')
      })
  }
}