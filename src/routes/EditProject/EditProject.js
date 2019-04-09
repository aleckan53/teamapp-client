import React, { useState, useContext, useEffect } from 'react'
import { Header, Form, LabeledInput, LabeledTextArea, Btn, Msg } from '../../components/Basic/Basic';
import ProjectsContext from '../../context/ProjectsContext'
import ProjectsService from '../../services/ProjectService';

const EditProject = props => {
  const context = useContext(ProjectsContext)
  const currentProject = useContext(ProjectsContext).currentProject

  const [state, setState] = useState({})

  useEffect(()=> {
    if(!Object.entries(currentProject).length) {
      ProjectsService.getProjectById(props.match.params.id)
        .then(res => {
          setState(res)
        })
    } else {
      setState(currentProject)
    }

    return () => {
      context.setCurrentProject({})
    }
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

  return !state.userCanEdit ? <Msg text="You can't edit this project"/> : (
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