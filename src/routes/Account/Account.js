import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdExit as Icon } from 'react-icons/io' 
import styles from './Account.module.css'
import Social from '../../components/Social/Social'
import UsersService from '../../services/UsersService'

const Account = props => {

  const [state, setState] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    about: '',
  })

  useEffect(() => {
    UsersService.getUserInfo()
      .then(res => setState(res))
  }, [])

  const handleLogOut = () => {
    TokenService.clearAuthToken()
    props.history.push('/account')
  }

  return (
    <div className="Account">
      <Hero
        img={state.avatar}
        heading={`${state.first_name} ${state.last_name}`}>
        <HeaderBtn 
          onClick={() => handleLogOut()}
          icon={Icon}
          className={styles.editBtn}/>
      </Hero>
      <section>
        <TitledText
          title="About"
          content={state.about}/> 
        <Social/>
      </section>
    </div>
  )
}

export default Account