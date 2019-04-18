import React, { useState, useEffect } from 'react'
import AuthApiService from '../../services/AuthApiService'
import { Header, Msg, Form, Btn, TextArea, Input } from '../../components/Basic/Basic'
import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'

const SignUpPage = props => {

  const [state, setState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: [],
  })

  const [valid, setValid] = useState({
    email: false,
    password: false,
    first_name: false,
    last_name: false,
  })

  const formValid = (valid.email && valid.password && valid.first_name && valid.last_name)

  useEffect(() => {
    setValid({
      email: validate.email(state.email),
      password: validate.password(state.password),
      first_name: validate.name(state.first_name),
      last_name: validate.name(state.last_name),
    })
  }, [state])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = document.getElementsByTagName('signUpForm')
    const data = new FormData(form)

    Object.entries(state).forEach(val => {
      data.append(val[0], val[1])
    })

    AuthApiService.postUser(data)
      .then(res => {
        if(res.ok) {
          props.history.push('/login')
        }
      }) 
      .catch(err => console.log(err))
  }

  return (
    <section>
      <Header h1='Create profile'>
      </Header>
      <Form
        className={styles.form}
        id="signUpForm"
        onSubmit={e => handleSubmit(e)}>
        <Input
          required
          placeholder="Email *"
          value={state.email}
          id="email"
          type="text"
          onChange={e => setState({...state, email: e.target.value})}/>
        <Input
          required
          placeholder="Password *"
          value={state.password}
          id="password"
          type="password"
          onChange={e => setState({...state, password: e.target.value})}/>
        <Input
          required
          placeholder="First Name *"
          value={state.first_name}
          id="first_name"
          type="text"
          onChange={e => setState({...state, first_name: e.target.value})}/>
        <Input
          required
          placeholder="Last Name *"
          value={state.last_name}
          id="last_name"
          type="text"
          onChange={e => setState({...state, last_name: e.target.value})}/>
        <p className='devMsg'>*** Image upload feature will be avialable soon, for now please copy/paste an external img link or default image will be set.</p>
        <Input
          placeholder="Profile image"
          value={state.avatar || ''}
          id="avatar"
          type="text"
          onChange={e => setState({...state, avatar: e.target.value})}/>
        <TextArea
          value={state.about}
          onChange={e => setState({...state, about: e.target.value})}
          placeholder="Write a few words about yourself"/>
        <Btn
          disabled={!formValid}
          title={validMsg(valid) || 'Submit'}
          type="submit"/>
        <Link to='/login'>
          <Msg text='Log in'/>
        </Link>
      </Form>
    </section>
  )
}

export default SignUpPage

const validMsg = valid => {
  if (!valid.email) return 'Please enter a valid email'
  if (!valid.password) return `Password must be 8-72 characters and have at least 1 number`
  if (!valid.first_name) return 'Please enter a valid first name'
  if (!valid.last_name) return 'Please enter a valid last name'
}

const validate = {
  email(email) {
    const regEx = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEx.test(String(email).toLowerCase())
  },
  password(password) {
    const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regEx.test(String(password))
  },
  name(name) {
    const regEx = /^\D{1,20}$/
    return regEx.test(String(name))
  },
}