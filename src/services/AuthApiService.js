import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res=> !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json()  
      )
      .catch(err=> console.log(err))
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res=> (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json().then(res=> ({
          email: res.email,
          ok: true,
        }))
      )
      .catch(err=> console.log(err))
  },

}

export default AuthApiService