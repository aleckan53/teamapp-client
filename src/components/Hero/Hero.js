import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom' 

import {IoMdCreate} from 'react-icons/io'

const Hero = props => {
  return <header className="Hero"
    style={{backgroundImage: `url(${props.img})`}}>
    <h1>{props.heading}</h1>
    {!props.editable ? '' : 
      <Link 
        className="edit-link"
        to={`/projects/${props.projectId}/edit`}>
        <IoMdCreate/>
      </Link>}
  </header>
}

export default Hero
