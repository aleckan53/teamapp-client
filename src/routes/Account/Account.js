import React, { useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdExit as Icon } from 'react-icons/io' 
import styles from './Account.module.css'
import Social from '../../components/Social/Social'

const Account = props => {
const context = useContext(UsersContext)
const handleLogOut = () => {
  TokenService.clearAuthToken()
  props.history.push('/account')
}

return (
  <div className="Account">
    <Hero
      img={context.userInfo.avatar}
      heading={`${context.userInfo.first_name} ${context.userInfo.last_name}`}>
      <HeaderBtn 
        onClick={() => handleLogOut()}
        icon={Icon}
        className={styles.editBtn}/>
    </Hero>
    <section>
      <TitledText
        title="About"
        content={context.userInfo.about}/> 
      <Social/>
    </section>
  </div>
)
}

export default Account