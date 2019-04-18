import React, { useContext } from 'react'
import TokenService from '../../services/TokenService'
import AuthApiService from '../../services/AuthApiService'
import { Header } from '../../components/Basic/Basic'
import EventsContext from '../../context/EventsContext'
import { Link } from 'react-router-dom'
import { Msg, Form, Btn, Input } from '../../components/Basic/Basic'
import styles from './LoginPage.module.css'

const LoginPage = props => {

  const { setAuthorized } = useContext(EventsContext)

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
    setAuthorized(true)
    redir(props)
  }

  const redir = props => {
    const { location, history } = props
    const destination = (location.state || {}).from || '/account'
    history.push(destination)
  }

  return (
    <section>
      <Header h1="Log in"/>
      <Form
        id="loginFrom"
        className={styles.form}
        onSubmit={e => handleSubmitJwtAuth(e)}>
        <Input
          required
          id="email"
          type="text"
          placeholder="Email"/>
        <Input
          required
          id="password"
          type="password"
          placeholder="Password"/>
        <Btn
          className={styles.btn}
          title="Submit"
          type="submit"/>
        <Link to='/signup'>
          <Msg
            text='Sign up'/>
        </Link>
    </Form>
    </section>
  )
}

export default LoginPage