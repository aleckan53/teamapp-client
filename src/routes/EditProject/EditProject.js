import React, { useState, useContext, useEffect } from 'react'
import { Header, Form, LabeledInput, LabeledTextArea, Btn } from '../../components/Basic/Basic';
import ProjectsContext from '../../context/ProjectsContext'
import ProjectsService from '../../services/ProjectService';

const EditProject = props => {
  const context = useContext(ProjectsContext)

  const [state, setState] = useState({
    title: '',
    img: '',
    description: '',
  })

  useEffect(()=> {
    const project = context.projectsList
      .find(p=> p.id === Number(props.match.params.id))
    setState(project)
  }, [])

  const [type, setType] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    if(type==='save') {
      ProjectsService.updateProject(context, props, state)
    } else {
      ProjectsService.deleteProject(context, props, state)
    }
  }

  return (
    <section className='EditProject'>
      <Header h1='Edit Project'/>
      <Form
        id='editProject'
        onSubmit={e=> handleSubmit(e)}>
        <LabeledInput
          value={state.title || ''}
          onChange={e=> setState({...state, title: e.target.value})}
          id='title'
          label='Title'/>
        <LabeledInput
          value={state.img}
          onChange={e=> setState({...state, img: e.target.value})}
          id='img'
          label='Image'/>
        <LabeledTextArea
          value={state.description}
          onChange={e=> setState({...state, description: e.target.value})}  
          id='description'
          label='Description'/>
        <Btn
          onClick={e=> setType(e.target.name)}
          name='save'
          title='Save changes'
          type='submit'/>
        <Btn
          onClick={e=> setType(e.target.name)}
          name='delete'
          title='Delete project'
          type='submit'/>

      </Form>
    </section>
  )
}

export default EditProject