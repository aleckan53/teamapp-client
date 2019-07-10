import React, { useLayoutEffect, useState } from 'react'

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {}
})

export default ThemeContext

export const ThemeProvider = (props) => {
  const [state, setState] = useState({
    dark: false,
  })  

  useLayoutEffect(() => {
    const currentDark = window.localStorage.getItem('dark')==='true'
    setState({...state, dark: currentDark})

    if(state.dark) {
      applyTheme(darkTheme)
    } else {
      applyTheme(lightTheme)
    }    

  }, [state.dark])

  const toggle = () => {
    setState({...state, dark: !state.dark})
    window.localStorage.setItem('dark', !state.dark)
  }

  const applyTheme = colors => {
    const style = Object.values(colors).join(';')
    document.getElementsByTagName('html')[0].style.cssText = style
  }

  const lightTheme = {
    bg: '--bg-color: white',
    main: '--main-color: #ff2e63',
    mainText: '--main-text: black',
    mainText30: '--main-text-30: rgba(0,0,0,0.3)',
    mainText80: '--main-text-80: rgba(0,0,0,0.8)',
    mainText60: '--main-text-60: rgba(0,0,0,0.6)',
    subText: '--sub-text: white',
    subText2: '--sub-text2: rgba(169,169,169,1)',
    btnBody: '--btn-body-1: white',
    btnBody2: '--btn-body-2: #ff2e63',
    borderColor: '--border-color: rgba(169,169,169,0.3)',
    boxShadow: '--box-shadow: rgba(169,169,169,0.3)',
    color1: '--color1: blue',
    color2: '--color2: green',
    altColor: '--alt-color: #257aa6',
  }

  const darkTheme = {
    bg: '--bg-color: #2D2D2D',
    main: '--main-color: #257aa6',
    mainText: '--main-text: white',
    mainText30: '--main-text-30: rgba(255,255,255,0.3)',
    mainText60: '--main-text-60: rgba(255,255,255,0.6)',
    mainText80: '--main-text-80: rgba(255,255,255,0.8)',
    mainText90: '--main-text-90: rgba(255,255,255,0.9)',
    subText: '--sub-text: white',
    subText2: '--sub-text2: rgba(180,180,180,1)',
    btnBody: '--btn-body-1: #2D2D2D',
    btnBody2: '--btn-body-2: #257aa6',
    borderColor: '--border-color: rgba(169,169,169,0.3)',
    boxShadow: '--box-shadow: rgba(0,0,0,0.3)',
    color1: '--color1: #EF8354',
    color2: '--color2: #3AAD4E',
    altColor: '--alt-color: #ff2e63',
  }

  return (
    <ThemeContext.Provider value={{
      dark: state.dark,
      toggle
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}