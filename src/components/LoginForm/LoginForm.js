import React from 'react'
import { LabeledInput, Form, Btn, TextArea, Input} from '../Basic/Basic'
import styles from './LoginForm.module.css'

export const LoginForm = props => {
  return (
    <Form
      id="loginFrom"
      className={styles.form}
      onSubmit={props.handleSubmit}>
      <LabeledInput
        className={styles.input}
        id="email"
        type="text"
        label="Email"/>
      <LabeledInput
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
      className={styles.regForm}
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
        />
      <Btn
        placeholder='Write '
        title="Create profile"
        type="submit"/>
    </Form>
  )
}
