import React from 'react'

const AppContext = React.createContext({
  ownerProjects: [],
  currentProject: {},
  darkTheme: false,
  setCurrentProject: ()=>{},
  changeAppTheme: ()=>{},
  addNewProject: ()=>{},
  updateProject: ()=>{},
})

export default AppContext