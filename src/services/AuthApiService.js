import config from '../config'
import TokenService from './TokenService'

const AuthApiService = {
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
  postUser(data) {
    return fetch(`${config.API_ENDPOINT}/users/create`, {
        method: 'POST',
        body: data,
      })
      .then(res => !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json().then(res=> ({
          email: res.email,
          ok: true,
        })))
  },
  guestLogin(setAuthorized, history, setLoading) {
    AuthApiService.postLogin({
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

export default AuthApiService