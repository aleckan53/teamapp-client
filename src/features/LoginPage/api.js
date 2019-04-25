import config from 'config'
import TokenService from 'services/TokenService'

export default {
  postLogin(props, setError, setLoading, setAuthorized, credentials) {
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
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess(setAuthorized, props)
      })
      .catch(setError)
  },
  onLoginSuccess (setAuthorized, props) {
    setAuthorized(true)
    const { location, history } = props
    const destination = (location.state || {}).from || '/account'
    history.push(destination)
  },
}