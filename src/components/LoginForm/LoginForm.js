import React from 'react'
import { Msg, Form, Btn, TextArea, Input} from '../Basic/Basic'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'

export const LoginForm = props => {
  return (
    <Form
      id="loginFrom"
      className={styles.form}
      onSubmit={props.handleSubmit}>
      <Input
        id="email"
        type="text"
        placeholder="Email"/>
      <Input
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
  )
}

export const SignUpForm = props => {
  // console.log(props)
  return (
    <Form
      className={styles.form}
      id="signUpForm"
      onSubmit={props.handleSubmit}>
      <Input
        placeholder="Email *"
        value={props.state.email}
        id="email"
        type="text"
        onChange={e => props.onChange({...props.state, email: e.target.value})}/>
      <Input
        placeholder="Password *"
        value={props.state.password}
        id="password"
        type="password"
        onChange={e => props.onChange({...props.state, password: e.target.value})}/>
      <Input
        placeholder="First Name *"
        value={props.state.first_name}
        id="first_name"
        type="text"
        onChange={e => props.onChange({...props.state, first_name: e.target.value})}/>
      <Input
        placeholder="Last Name *"
        value={props.state.last_name}
        id="last_name"
        type="text"
        onChange={e => props.onChange({...props.state, last_name: e.target.value})}/>
      <Input
        placeholder="Profile image"
        value={props.state.avatar || ''}
        id="avatar"
        type="text"
        onChange={e => props.onChange({...props.state, avatar: e.target.value})}/>
      <TextArea
        value={props.state.about}
        onChange={e => props.onChange({...props.state, about: e.target.value})}
        placeholder="Write a few words about yourself"/>
      <Btn
        disabled={props.formValid}
        title="Submit"
        type="submit"/>
      <Link to='/login'>
        <Msg text='Log in'/>
      </Link>
    </Form>
  )
}
