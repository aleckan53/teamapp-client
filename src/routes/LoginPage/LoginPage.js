import React, { useContext, useState } from 'react'
import TokenService from '../../services/TokenService'
import AuthApiService from '../../services/AuthApiService'
import { Header, LoaderFull } from '../../components/Basic/Basic'
import EventsContext from '../../context/EventsContext'
import { Link } from 'react-router-dom'
import { Msg, Form, Btn, Input, Error } from '../../components/Basic/Basic'
import styles from './LoginPage.module.css'

const LoginPage = props => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setAuthorized } = useContext(EventsContext)

  const handleSubmitJwtAuth = e => {
    e.preventDefault()

    const { email, password } = e.target
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    }, setLoading)
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)

        onLoginSuccess()
      })
    .catch(setError)
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
    <>
    {loading ? <LoaderFull/> : ''}
    <section>
      <Header h1="Log in"/>
      <Form
        id="loginFrom"
        className={styles.form}
        onSubmit={e => handleSubmitJwtAuth(e)}>
        <Input
          autoComplete='email'
          required
          id="email"
          type="text"
          placeholder="Email"/>
        <Input
          autoComplete='current-password'
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
        <Error error={error}/>
    </Form>
    </section>
    </>
  )
}

export default LoginPage