import React, { useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import Hero from '../../components/Hero/Hero'
import { Btn, HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdSettings as Icon } from 'react-icons/io' 
import { Link } from 'react-router-dom' 
import styles from './Account.module.css'

const Account = props => {

const context = useContext(UsersContext)

const handleLogOut = () => {
  TokenService.clearAuthToken()
  props.history.push('/account')
}
console.log(context)
return <div className="Account">
    <Hero
      img={context.userInfo.avatar}
      heading={`${context.userInfo.first_name} ${context.userInfo.last_name}`}>
      <Link to={`/user/${props.match.params.id}/edit-profile`}>
        <HeaderBtn 
          icon={Icon}
          className={styles.editBtn}/>
      </Link>
    </Hero>
      <section>
        <TitledText
          title="About"
          content={context.userInfo.about}/> 
        <Btn
          onClick={()=>handleLogOut()}
          type="button"
          title="Log out"/>
      </section>
  </div>
}

export default Account