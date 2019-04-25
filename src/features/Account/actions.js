import TokenService from 'services/TokenService'

export default {
  logOut(setAuthorized, history) {
    TokenService.clearAuthToken()
    setAuthorized(false)
    history.push('/account')
    window.location.reload() // TODO: close connection - EventsSource
  }
}
