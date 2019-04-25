import React, { useEffect, useState, useContext } from 'react'
import { IoMdExit as Icon } from 'react-icons/io' 
import { HeaderBtn, TitledText } from '../Basic'
import context from 'context'
import Actions from './actions'
import Hero from '../Hero'
import Api from './api'

const Account = props => {

  const { setAuthorized } = useContext(context.Events)

  const [state, setState] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    about: '',
    links: [],
  })
  
  useEffect(() => {
    Api.getUserInfo(setState)
  }, [])

  return (
    <div className="Account">
      <Hero
        position='center 10%'
        img={state.avatar}
        heading={`${state.first_name} ${state.last_name}`}>
        <HeaderBtn 
          style={{opacity: '.8'}}
          onClick={() => Actions.logOut(setAuthorized, props.history)}
          icon={Icon}/>
      </Hero>
      <section>
        <TitledText
          title="About"
          content={state.about}/>
      </section>
    </div>
  )
}

export default Account

