import React, { useState, useContext } from 'react'
import { Header, Form, LabeledInput, LabeledTextArea, Btn } from '../../components/Basic/Basic';
import ProjectsContext from '../../context/ProjectsContext'
import ProjectsService from '../../services/ProjectService';

const AddProject = props => {
  const projectsContext = useContext(ProjectsContext)

  const [state, setState] = useState({
    title: '',
    img: '',
    description: '',
  })

  const handleCreateProject = e => {
    e.preventDefault()
    ProjectsService.uploadProject(projectsContext, props, state)
  }

  return (
    <section className='AddProject'>
      <Header
        h1='Create project'/>
      <Form 
        id='addProject'
        onSubmit={e=> handleCreateProject(e)}>
        <LabeledInput
          onChange={e=> setState({...state, title: e.target.value})}
          id='title'
          label='Title'/>
        <LabeledInput
          onChange={e=> setState({...state, img: e.target.value})}
          id='img'
          label='Image'/>
        <LabeledTextArea
          onChange={e=> setState({...state, description: e.target.value})}  
          id='description'
          label='Description'/>
        <Btn
          title='Create project'
          type='submit'/>
      </Form>
    </section>
  )
}

export default AddProject