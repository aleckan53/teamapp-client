import React from 'react'

export const Section = ({ className, ...props}) => {
  const classes = ['Section', className].filter(Boolean).join(' ')
  return <section className={classes} {...props}/>  
}

export const Input = ({ className, type, value, onChange, ...props}) => {
  const classes = ['Section', className].filter(Boolean).join(' ')

  return <input type={type} value={value} onChange={onChange} {...props}/>
}