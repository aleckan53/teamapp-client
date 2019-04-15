import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import { IoMdSettings as Icon } from 'react-icons/io' 
import { HeaderBtn } from '../Basic/Basic'
import PropTypes from 'prop-types'

const Hero = props => {

  const backgroundImgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 65%, rgba(0,0,0,0.25) 100%), url(${props.img})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
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

Hero.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.number,
}

export default Hero