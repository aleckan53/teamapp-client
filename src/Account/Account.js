import React from 'react'
import './Account.css'

export const Account = props => {
  console.log(props)
  return <div className="Account">
    <div 
      style={{
        backgroundPosition: "center",
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.photo})`
      }}
      className="hero">
      <span className="name">{props.name}</span>
    </div>
    <header>
      <h2>Account</h2>
    </header>
    <div>
      <button>Log out</button>
    </div>
  </div>
}

