import React, { useState } from 'react'
import { SignUpForm } from '../../components/LoginForm/LoginForm'
import AuthApiService from '../../services/AuthApiService'
import { Header } from '../../components/Basic/Basic';

const SignUpPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    AuthApiService.postUser({
      email, password, first_name, last_name, avatar
    })
      .then(res=> {
        if(res.ok) {
          props.history.push('/login')
        }
      })
      .catch(err=> console.log(err))
    
  }

  return (
    <section>
      <Header h1="Create profile"/>
      <SignUpForm
        handleSubmit={e=> handleSubmit(e)}
        value={{ email, password, first_name, last_name, avatar }}
        onChange={{ setEmail, setPassword, setFirst_name, setLast_name, setAvatar }}/>
    </section>
  )
}

export default SignUpPage