import React, { useState, useContext, useEffect } from 'react'
import context from 'context'
import { Header, Form, LabeledInput, LabeledTextArea, Btn, Msg } from '../Basic'
import Api from './api'

const EditProject = props => {
  const { setCurrentProject } = useContext(context.Projects)
  const { currentProject } = useContext(context.Projects)

  const [state, setState] = useState({})

  useEffect(() => {
    if(!Object.entries(currentProject).length) {
      Api.getProjectById(props.match.params.id)
        .then(setState)
    } else {
      setState(currentProject)
    }

    return () => {
      setCurrentProject({})
    }
  }, [])

  const [type, setType] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    if(type === 'delete') {
      Api.deleteProject(props, state)
    } else {
      Api.updateProject(props, state, setCurrentProject)
    }
  }

  return !state.userCanEdit ? <Msg text="You can't edit this project"/> : (
    <section className='EditProject'>
      <Header h1='Edit Project'/>
      <Form
        id='editProject'
        onSubmit={handleSubmit}>
        <LabeledInput
          type='text'
          value={state.title || ''}
          onChange={e => setState({...state, title: e.target.value})}
          id='title'
          label='Title'/>
        <LabeledInput
          type='text'
          value={state.img}
          onChange={e => setState({...state, img: e.target.value})}
          id='img'
          label='Image'/>
        <LabeledTextArea
          value={state.description}
          onChange={e => setState({...state, description: e.target.value})}  
          id='description'
          label='Description'/>
        <Btn
          onClick={e => setType(e.target.name)}
          name='save'
          title='Save changes'
          type='submit'/>
        <Btn
          onClick={e => setType(e.target.name)}
          name='delete'
          title='Delete project'
          type='submit'/>
      </Form>
    </section>
  )
}

export default EditProject