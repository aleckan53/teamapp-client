import React, { useState, useContext } from 'react'
import { SignUpForm } from '../../components/LoginForm/LoginForm'
import AuthApiService from '../../services/AuthApiService'
import UsersContext from '../../context/UsersContext'

const SignUpPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [avatar, setAvatar] = useState('')

  const usersContext = useContext(UsersContext)

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
    <SignUpForm
      handleSubmit={e=> handleSubmit(e)}
      value={{ email, password, first_name, last_name, avatar }}
      onChange={{ setEmail, setPassword, setFirst_name, setLast_name, setAvatar }}/>
  )
}

export default SignUpPage