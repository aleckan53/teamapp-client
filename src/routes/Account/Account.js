import React, { useEffect, useState, useContext } from 'react'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdExit as Icon } from 'react-icons/io' 
import styles from './Account.module.css'
import Social from '../../components/Social/Social'
import UsersService from '../../services/UsersService'
import EventsContext from '../../context/EventsContext'

const Account = props => {

  const { setAuthorized } = useContext(EventsContext)

  const [state, setState] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    about: '',
    links: [],
  })

  useEffect(() => {
    UsersService.getUserInfo()
      .then(res => setState(res))
  }, [])

  const handleLogOut = () => {
    TokenService.clearAuthToken()
    setAuthorized(false)
    props.history.push('/account')
    window.location.reload() // closes EventsSource !bad
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
        <Social
          links={state.links}/>
      </section>
    </div>
  )
}

export default Account

