import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Api from './api'
import context from 'context'
import { Msg, Form, Btn, Input, Error, Header, LoaderFull } from '../Basic'

const LoginPage = props => {
  
  const { setAuthorized } = useContext(context.Events)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    Api.postLogin(props, setError, setLoading, setAuthorized, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
  }

  return <>
    {loading ? <LoaderFull className={styles.loader}/> : ''}
    <section>
      <Header h1="Log in"/>
      <Form
        id="loginFrom"
        className={styles.form}
        onSubmit={handleSubmit}>
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
}

export default LoginPage