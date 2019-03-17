import React from 'react'

const AppContext = React.createContext({
  currentProject: {},
  setCurrentProject: ()=>{},
})

export default AppContext