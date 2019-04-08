import React, { useEffect, useContext, useState } from 'react'
import ProjectsService from '../../services/ProjectService'
import ProjectsContext from '../../context/ProjectsContext'
import UsersContext from '../../context/UsersContext'
import Hero from '../../components/Hero/Hero'
import Contributors from '../../components/Contributors/Contributors'
import { TitledText } from '../../components/Basic/Basic'
import JoinBtn from '../../components/JoinBtn/JoinBtn'

const ProjectDetails = props => {
  const projectsContext = useContext(ProjectsContext)
  const usersContext = useContext(UsersContext)

  const [state, setState] = useState({
    userCanEdit: false,
    userHasProject: false,
    userAwaitsAnswer: false,
  })

  const proj = projectsContext.currentProject || {
    img: '',
    title: '',
    text: '',
  }

  useEffect(()=> { 
    if (Object.entries(proj).length === 0) {
      ProjectsService.getProjectById(props.match.params.id)
        .then(res => projectsContext.setCurrentProject(res))
    }
    setState({
      userCanEdit:
        proj.leader_id === usersContext.userInfo.id,
      userHasProject:
        projectsContext.projectsList.some(project=> proj.id === project.id),
      // userAwaitsAnswer: 
      //   usersContext.userInfo.outgoing.some(req => req.project_id === props.match.params.id)
    })  
  }, [usersContext.userInfo.outgoing])

  return (
    <div className="ProjectDetails">
      <Hero 
        id={props.match.params.id}
        show={state.userCanEdit}
        img={proj.img}
        heading={proj.title}/>
      <section>    
        {
          state.userHasProject
            ? ''
            : <JoinBtn/>
        }
        <TitledText
          title="Description"
          content={proj.description}/>
        <Contributors
          project_id={props.match.params.id}/>
      </section>
    </div>
  )
}

export default ProjectDetails