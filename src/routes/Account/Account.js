import React from 'react'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdExit as Icon } from 'react-icons/io' 
import styles from './Account.module.css'
import Social from '../../components/Social/Social'

const Account = props => {

const handleLogOut = () => {
  props.setData(false)
  TokenService.clearAuthToken()
  props.history.push('/account')
}
return (
  <div className="Account">
    <Hero
      img={props.data.avatar}
      heading={`${props.data.first_name} ${props.data.last_name}`}>
      <HeaderBtn 
        onClick={() => handleLogOut()}
        icon={Icon}
        className={styles.editBtn}/>
    </Hero>
    <section>
      <TitledText
        title="About"
        content={props.data.about}/> 
      <Social/>
    </section>
  </div>
)
}

export default Account