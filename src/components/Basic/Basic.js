import React from 'react'
import styles from './Basic.module.css'
import Loader from 'react-loader-spinner'


export const Header = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{props.h1}</h1>
      {props.children}
    </header>
  )
}

export const HeaderBtn = props => {
  const Icon = props.icon
  return (
    <Icon className={`${styles.headerBtn} ${props.className}`}>
      {props.children}
    </Icon>
  )
}

export const CustomLoader = props => {
  const loaderProps = {
    width: "30px",
    type: "ThreeDots",
    color: "var(--main-color)",
  }

  return (
    <div className={`${styles.loader} ${props.className}`}>
      <Loader {...loaderProps}/>
    </div>
  )
}

export const Input = props => {
  const handleChange = (e, props) => {
    if (props.handleLoader) {
      props.handleLoader(true)
    }
    props.setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.inputContainer}>
      {
        !props.uncontrolled 
          ? <input
              name={props.id}
              className={`${styles.input} ${props.className}`}
              style={props.style}
              id={props.id}
              type={props.type}
              value={props.value || ''} 
              onChange={e=> handleChange(e, props)}/>
          : <input
              autoComplete="on"
              name={props.id}
              className={`${styles.input} ${props.className}`}
              style={props.style}
              id={props.id}
              type={props.type}/>
      }
      {!props.loader ? '' : <CustomLoader/>}
    </div>
  )
}

export const Btn = props => {
  return (
    <button
      onClick={()=> !props.onClick ? '' : props.onClick()} 
      type={props.type}
      className={styles.btn}>
      {props.title}
    </button>
  )
}

export const Label = props => {
  return (
    <label
      className={styles.label} 
      htmlFor={props.id}>{props.label}</label>
  )
}

export const TextArea = props => {
  return (
    <textarea
      id={props.id}
      form={props.form}
      value={props.value}
      className={styles.textArea}
      onChange={e=>props.setValue(e.currentTarget.value)}/>
  )
}

export const LabeledInput = props => {
  return (
    <div className={styles.labeledInput}>
      <Label {...props}/>
      <Input {...props}/>
    </div>
  )
}

export const LabeledTextArea = props => {
  return (
    <div className={styles.labeledTextArea}>
      <Label {...props}/>
      <TextArea {...props}/>
    </div>
  )
}

export const Form = props => {
  return (
    <form
      id={props.id}
      className={`${styles.form} ${props.className}`}
      onSubmit={e=>props.handleSubmit(e)}>
      <fieldset>
        <legend>{props.legend}</legend>
        {props.children}
      </fieldset>
    </form>
  )
}
