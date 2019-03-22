import React, { useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import Hero from '../../components/Hero/Hero'

const Account = props => {

const context = useContext(UsersContext)

return <div className="Account">
    <Hero
      img={context.userInfo.avatar}
      heading={`${context.userInfo.firstName} ${context.userInfo.lastName}`}/>
  </div>
}

export default Account