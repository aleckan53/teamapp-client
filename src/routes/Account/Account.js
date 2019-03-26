import React, { useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import Hero from '../../components/Hero/Hero'
import { Btn } from '../../components/Basic/Basic';
import TokenService from '../../services/TokenService';

const Account = props => {

const context = useContext(UsersContext)

const handleLogOut = () => {
  TokenService.clearAuthToken()
  props.history.push('/account')
}

return <div className="Account">
    <Hero
      img={context.userInfo.avatar}
      heading={`${context.userInfo.first_name} ${context.userInfo.last_name}`}/>
      <Btn
        onClick={()=>handleLogOut()}
        type="button"
        title="Log out"/>
  </div>
}

export default Account