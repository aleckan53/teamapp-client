import React from 'react'
import styles from './Basic.module.css'
import Loader from 'react-loader-spinner'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'

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
    <Icon onClick={props.onClick} className={`${styles.headerBtn} ${props.className}`}>
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
  return (
    <div className={styles.inputContainer}>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
        name={props.id}
        className={`${styles.input} ${props.className}`}/>
      {!props.showLoader ? '' : <CustomLoader/>}
    </div>
  )
}

export const Btn = (props) => {
  return (
    <button
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.btn} ${props.className} ${props.disabled ? styles.diabled : ''}`}>
      {props.disabled ? 'Please fill out required fields *' : props.title}
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
      {...props}
      className={styles.textArea}/>
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
      {...props}
      className={`${styles.form} ${props.className}`}>
      <fieldset>
        <legend>{props.legend}</legend>
        {props.children}
      </fieldset>
    </form>
  )
}

export const Msg = props => {
  return (
    <p className={styles.msg}>{props.text}</p>
  )
}

export const TitledText = props => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </>
  )
}

export const CheckBox = props => {
  return (
    <div className={styles.checkbox}>
      <input 
        style={{
          background: `image(${Moon})`
        }}
        checked={props.checked}
        onChange={props.onChange}
        type='checkbox'/>
      <Moon 
        className={`${styles.icon} ${!props.checked ? '' : styles.checked}`}/>
      <Sun
        className={`${styles.icon} ${props.checked ? '' : styles.checked}`}/>
    </div>
  )
}

// TODO (upgrade) #2: Dot
export const Dot = props => {
  return <span className={`${styles.dot}`}></span>
}