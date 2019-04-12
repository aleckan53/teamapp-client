import React, { useState, useEffect } from 'react'
import { SignUpForm } from '../../components/LoginForm/LoginForm'
import AuthApiService from '../../services/AuthApiService'
import { Header } from '../../components/Basic/Basic'

const SignUpPage = props => {

  const [state, setState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: '',
    about: '',
  })

  const [valid, setValid] = useState({
    form: true,
  })

  const [timer, setTimer] = useState()

  // dummy check
  useEffect(() => {
  }, [state])

  const handleSubmit = (e) => {
    e.preventDefault()
    AuthApiService.postUser(state)
      .then(res => {
        if(res.ok) {
          props.history.push('/login')
        }
      })
    
  }

  return (
    <section>
      <Header h1="Create profile"/>
      <SignUpForm
        formValid={!valid.form}
        handleSubmit={e => handleSubmit(e)}
        state={state}
        onChange={setState}/>
    </section>
  )
}

export default SignUpPage