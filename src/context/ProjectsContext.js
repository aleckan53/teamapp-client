import React, { useState } from 'react'

const ProjectsContext = React.createContext({
  currentProject: {},
  setCurrentProject: ()=>{},
})

export default ProjectsContext

export const ProjectsProvider = props => {
  const [state, setState] = useState({
    currentProject: {},
  })

  const setCurrentProject = currentProject => {
    setState({currentProject})
  }
  
  return (
    <ProjectsContext.Provider value={{
      currentProject: state.currentProject,
      setCurrentProject: setCurrentProject,  
    }}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

