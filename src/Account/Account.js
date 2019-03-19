import React from 'react'
import './Account.css'

import Hero from '../Hero/Hero'

const Account = props => {

  return <div className="Account">
    <Hero owner={props.owner}/>
    <section className="Account__container">
      <header>
        <h1>Account</h1>
      </header>
      <div>
        <button>Log out</button>
      </div>
    </section>
  </div>
}

export default Account