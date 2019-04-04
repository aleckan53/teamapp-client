import React, { useContext } from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import TokenService from '../../services/TokenService'
import UsersContext from '../../context/UsersContext'
import ProjectsContext from '../../context/ProjectsContext'
import AuthApiService from '../../services/AuthApiService'

const LoginPage = props => {
  const usersContext = useContext(UsersContext)
  const projectsContext = useContext(ProjectsContext)

  const handleSubmitJwtAuth = e => {
    e.preventDefault()

    const { email, password } = e.target
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)

        usersContext.getUserInfo()
        projectsContext.getUserProjects()    

        onLoginSuccess()
      })
    .catch(err => console.log(err))
  }

  const onLoginSuccess = () => {
    const { location, history } = props
    const destination = (location.state || {}).from || '/account'

    history.push(destination)
  }

  return (
    <section>
      <LoginForm
        handleSubmit={handleSubmitJwtAuth}/>
    </section>
  )
}

export default LoginPage