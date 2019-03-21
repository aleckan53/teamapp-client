import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Hero from '../../components/Hero/Hero'
import './Account.css'

const Account = (props) => {

const context = useContext(AppContext)

return <div className="Account">
    <Hero
      img={context.owner.avatar}
      heading={`${context.owner.firstName} ${context.owner.lastName}`}/>
  </div>
}

export default Account