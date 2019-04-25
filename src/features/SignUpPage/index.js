import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Api from './api'
import Actions from './actions'
import { Link } from 'react-router-dom'
import { Header, Msg, Form, Btn, TextArea, Input, Error } from '../Basic'

const SignUpPage = props => {

  const [error, setError] = useState(null)
  const [state, setState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: '',
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
      email: Actions.validate.email(state.email),
      password: Actions.validate.password(state.password),
      first_name: Actions.validate.name(state.first_name),
      last_name: Actions.validate.name(state.last_name),
    })
  }, [state])
  
  const handleSubmit = e => {
    e.preventDefault()
    const form = document.getElementsByTagName('signUpForm')
    const data = new FormData(form)

    Object.entries(state).forEach(val => {
      data.append(val[0], val[1])
    })

    Api.postUser(data)
      .then(res => {
        if(res.ok) {
          props.history.push('/login')
        }
      }) 
      .catch(setError)
  }

  return (
    <section>
      <Header h1='Create profile'>
      </Header>
      <Form
        className={styles.form}
        id="signUpForm"
        onSubmit={handleSubmit}>
        <Input
          autoComplete='email'
          required
          placeholder="Email *"
          value={state.email}
          id="email"
          type="text"
          onChange={e => setState({...state, email: e.target.value})}/>
        <Input
          required
          autoComplete='new-password'
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
          title={Actions.validMsg(valid) || 'Submit'}
          type="submit"/>
        <Link to='/login'>
          <Msg text='Log in'/>
        </Link>
        <Error error={error}/>
      </Form>
    </section>
  )
}

export default SignUpPage
