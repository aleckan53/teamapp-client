import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }})
      .then(res => !res.ok ? res.json().then(e=> Promise.reject(e)) : res.json())
      .catch(err=> console.log(err))
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
      .catch(err=> console.log(err))
  },

}

export default AuthApiService