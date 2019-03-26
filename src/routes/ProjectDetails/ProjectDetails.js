import React, { useEffect, useContext, useState } from 'react'
import ProjectsService from '../../services/ProjectService'
import ProjectsContext from '../../context/ProjectsContext'
import Hero from '../../components/Hero/Hero'
import { HeaderBtn } from '../../components/Basic/Basic'
import { IoMdSettings as Icon } from 'react-icons/io' 
import styles from './ProjectDetails.module.css'
import { Link } from 'react-router-dom'

const ProjectDetails = props => {
  const context = useContext(ProjectsContext)

  const [owner, setOwner] = useState(false)

  useEffect(()=> { // loads project if user types address manually
    if (Object.entries(context.currentProject).length === 0) {
      ProjectsService.getProjectById(props.match.params.id)
        .then(res => {
          console.log(res)
          context.setCurrentProject(res)
        })
    }
  }, [context.currentProject])

  useEffect(()=> {  // user can edit?
    setOwner(context.projectsList.some(p=> p.id === context.currentProject.id))
  }, [context.currentProject])

  return (
    <div className="ProjectDetails">
      <Hero 
        img={context.currentProject.img}
        heading={context.currentProject.title}>
        {
          !owner ? '' : 
          <Link to={`/projects/${props.match.params.id}/edit`}>
            <HeaderBtn 
              icon={Icon}
              className={styles.editBtn}/>
          </Link>
        }
      </Hero>
      <section>
        <p>{context.currentProject.description}</p>
      </section>
    </div>
  )
}

export default ProjectDetails