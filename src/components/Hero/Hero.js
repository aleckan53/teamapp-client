import React from 'react'
import styles from './Hero.module.css'

const Hero = props => {

  const backgroundImgStyle = {
    backgroundImage: `url(${props.img})`
  }

  return (
    <header 
      className={styles.hero}
      style={backgroundImgStyle}>
      <h1 className={styles.h1}>{props.heading}</h1>
      {props.children}
    </header>
  )
}

export default Hero