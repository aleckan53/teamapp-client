import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './Account.css'
import { Section } from '../../components/Utils/Utils'
import { AddForm, EditForm } from '../../components/ProjectService/CreateForm'
import Hero from '../../components/Hero/Hero'

const Account = (props) => {

const context = useContext(AppContext)
console.log(props)
return <div className="Account">
    <Hero
      img={context.owner.avatar}
      heading={`${context.owner.firstName} ${context.owner.lastName}`}/>
    <Section className="Account__container">
      <div>
        <h2>Bookmarks</h2>
      </div>
    </Section>
  </div>
}

export default Account