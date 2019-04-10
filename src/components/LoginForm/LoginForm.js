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
  return (
    <Form
      className={styles.form}
      id="signUpForm"
      handleSubmit={props.handleSubmit}>
      <Input
        placeholder="Email *"
        value={props.value.email}
        id="email"
        type="text"
        onChange={props.onChange.setEmail}/>
      <Input
        placeholder="Password *"
        value={props.value.password}
        id="password"
        type="password"
        onChange={props.onChange.setPassword}/>
      <Input
        placeholder="First Name *"
        value={props.value.first_name}
        id="first_name"
        type="text"
        onChange={props.onChange.setFirst_name}/>
      <Input
        placeholder="Last Name *"
        value={props.value.last_name}
        id="last_name"
        type="text"
        onChange={props.onChange.setLast_name}/>
      <Input
        placeholder="Profile image"
        value={props.value.avatar || ''}
        id="avatar"
        type="text"
        onChange={props.onChange.setAvatar}/>
      <TextArea
        placeholder="Write a few words about yourself"/>
      <Btn
        title="Submit"
        type="submit"/>
      <Link to='/login'>
        <Msg text='Log in'/>
      </Link>
    </Form>
  )
}
