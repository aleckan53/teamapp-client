import React, { useEffect, useState, useContext } from 'react'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn, TitledText } from '../../components/Basic/Basic'
import TokenService from '../../services/TokenService'
import { IoMdExit as Icon } from 'react-icons/io' 
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
    window.location.reload() // TODO #4: closes EventsSource !bad
  }

  return (
    <div className="Account">
      <Hero
        position='center 10%'
        img={state.avatar}
        heading={`${state.first_name} ${state.last_name}`}>
        <HeaderBtn 
          style={{opacity: '.8'}}
          onClick={() => handleLogOut()}
          icon={Icon}/>
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

