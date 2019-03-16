import React from 'react'
import './Account.css'

export const Account = props => {
  
  const owner = props.owner

  return <div className="Account">
    <div 
      style={{
        backgroundPosition: "center",
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${owner.avatar})`
      }}
      className="hero">
      <span className="name">{`${owner.firstName} ${owner.lastName}`}</span>
    </div>
    <header>
      <h2>Account</h2>
    </header>
    <div>
      <button>Log out</button>
    </div>
  </div>
}

