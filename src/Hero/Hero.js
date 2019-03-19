import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom' 

import {IoMdCreate} from 'react-icons/io'

const Hero = props => {
  const details = props.owner || props.project
  return <header className="Hero"
    style={{
      backgroundPosition: "center",
      backgroundSize: `cover`,
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${details.img || details.avatar})`
    }}>
    <h2>{details.title || details.firstName + " "+ details.lastName}</h2>
    {!props.editable ? '' : <Link to={`/project/${props.projectId}/edit`} className="edit-link"><IoMdCreate/></Link>}
    {!props.owner ? '' : <div className="edit-profile"><IoMdCreate/></div>}
  </header>

}

export default Hero