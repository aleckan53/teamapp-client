import React from 'react'
import styles from './Utils.module.css'

export const Section = ({ className, ...props}) => {
  const classes = ['Section', className].filter(Boolean).join(' ')
  return <section className={classes} {...props}/>  
}

export const Input = () => {


  return (
    <input
      className={styles.input}
    />
  )
}

