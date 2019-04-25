import React, { useState } from 'react'
import { Header, Form, LabeledInput, LabeledTextArea, Btn } from '../Basic'
import Api from './api'

const AddProject = props => {

  const [state, setState] = useState({
    title: '',
    img: '',
    description: '',
  })

  return (
    <section className='AddProject'>
      <Header
        h1='Create project'/>
      <Form 
        id='addProject'
        onSubmit={e => {
          e.preventDefault()
          Api.uploadProject(props.history, state)
        }}>
        <LabeledInput
          type='text'
          onChange={e => setState({...state, title: e.target.value})}
          id='title'
          label='Title'/>
        <LabeledInput
          devMsg='*** Image upload feature will be avialable soon, for now please copy/paste an external img link.'
          type='text'
          onChange={e => setState({...state, img: e.target.value})}
          id='img'
          label='Image'/>
        <LabeledTextArea
          onChange={e => setState({...state, description: e.target.value})}  
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