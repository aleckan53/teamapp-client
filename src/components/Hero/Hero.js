import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import { IoMdSettings as Icon } from 'react-icons/io' 
import { HeaderBtn } from '../Basic/Basic'

const Hero = props => {

  const backgroundImgStyle = {
    backgroundImage: `url(${props.img})`
  }

  return (
    <header 
      className={`${styles.hero}`}
      style={backgroundImgStyle}>
      <h1 className={styles.h1}>{props.heading}</h1>
      { !props.show ? '' :
        <Link to={`/projects/${props.id}/edit`}>
          <HeaderBtn 
            icon={Icon}
            className={styles.editBtn}/>
        </Link>
      }
      {props.children}
    </header>
  )
}

export default Hero