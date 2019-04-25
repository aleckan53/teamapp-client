import config from 'config'

export default {
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
        })
      )
    )
  },

}