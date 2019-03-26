import React from 'react'
import { LabeledInput, Form, Btn } from '../Basic/Basic'
import styles from './LoginForm.module.css'

export const LoginForm = props => {
  return (
    <Form
      id="loginFrom"
      className={styles.form}
      handleSubmit={props.handleSubmit}>
      <LabeledInput
        uncontrolled
        className={styles.input}
        id="email"
        type="text"
        label="Email"/>
      <LabeledInput
        uncontrolled
        className={styles.input}
        id="password"
        type="password"
        label="Password"/>
      <Btn
        title="Login"
        type="submit"/>
    </Form>
  )
}

export const SignUpForm = props => {

  return (
    <Form
      id="signUpForm"
      handleSubmit={props.handleSubmit}>
      <LabeledInput
        value={props.value.email}
        setValue={props.onChange.setEmail}
        id="email"
        type="text"
        label="Email"/>
      <LabeledInput
        value={props.value.password}
        setValue={props.onChange.setPassword}
        id="password"
        type="text"
        label="Password"/>
      <LabeledInput
        value={props.value.first_name}
        setValue={props.onChange.setFirst_name}
        id="first_name"
        type="text"
        label="First name"/>
      <LabeledInput
        value={props.value.last_name}
        setValue={props.onChange.setLast_name}
        id="last_name"
        type="text"
        label="Last name"/>
      <LabeledInput
        value={props.value.avatar}
        setValue={props.onChange.setAvatar}
        id="avatar"
        type="text"
        label="Profile image"/>
      <Btn
        title="Create profile"
        type="submit"/>
    </Form>
  )
}
