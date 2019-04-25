import React, { useEffect, useContext, useState } from 'react'
import Api from './api'
import context from 'context'
import Hero from '../Hero'
import Contributors from './components/Contributors'
import { TitledText, Error } from '../Basic'

const ProjectDetails = props => {
  const { setCurrentProject, currentProject } = useContext(context.Projects)

  const [state, setState] = useState({})
  const [error, setError] = useState(null)

  useEffect(()=> { 
    if(!Object.entries(currentProject).length) {
      Api.getProjectById(props.match.params.id)
        .then(setState)
        .catch(setError)
    } else {
      setState(currentProject)
    }
    return () => {
      setCurrentProject({})
      setError(null)
    }
  }, [])
  
  // TODO: Add Social media links component
  return error ? <Error msg={error}/> : (
    <div className="ProjectDetails">
      <Hero 
        position='center'
        id={state.id}
        show={state.userCanEdit}
        img={state.img}
        heading={state.title}/>
      <section>    
        <TitledText
          title="Description"
          content={state.description}/>
        <Contributors
          {...props}
          leader_id={state.leader_id}
          project_id={Number(props.match.params.id)}/>
      </section>
    </div>
  )
}

export default ProjectDetails