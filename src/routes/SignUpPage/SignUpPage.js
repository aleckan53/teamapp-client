import React, { useState } from 'react'
import { SignUpForm } from '../../components/LoginForm/LoginForm'

const SignUpPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()


  }



  return (
    <SignUpForm
      handleSubmit={e=> handleSubmit(e)}
      value={{ email, password, first_name, last_name, avatar }}
      onChange={{ setEmail, setPassword, setFirst_name, setLast_name, setAvatar }}/>
  )
}

export default SignUpPage