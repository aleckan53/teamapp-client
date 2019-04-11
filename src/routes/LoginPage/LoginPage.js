import React from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import TokenService from '../../services/TokenService'
import AuthApiService from '../../services/AuthApiService'
import { Header } from '../../components/Basic/Basic'

const LoginPage = props => {

  const handleSubmitJwtAuth = e => {
    e.preventDefault()

    const { email, password } = e.target
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)

        onLoginSuccess()
      })
    .catch(err => console.log(err))
  }

  const onLoginSuccess = () => {
    props.setAuthorized(true)
    const { location, history } = props
    const destination = (location.state || {}).from || '/account'

    history.push(destination)
  }

  return (
    <section>
      <Header h1="Log in"/>
      <LoginForm
        handleSubmit={handleSubmitJwtAuth}/>
    </section>
  )
}

export default LoginPage