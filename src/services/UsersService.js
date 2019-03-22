import config from '../config'

const UsersService = {
  getMainUserData(id) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`)
      .then(res=> !res.ok
        ? res.json().then(err=> Promise.reject(err))
        : res.json()
      )
  }
}

export default UsersService