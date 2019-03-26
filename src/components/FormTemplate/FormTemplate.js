import React from 'react'
import { Form, LabeledTextArea, LabeledInput, Header, Btn } from '../../components/Basic/Basic'

const FormTemplate = props => {

  return (
    <section>
      <Header
        h1={props.h1}/>
      <Form
      id='form'
      handleSubmit={props.handleSubmit}>
      <LabeledInput
        value={props.value.title}
        type="text"
        label="Title"
        id="title-input"
        setValue={props.setTitle}/>
      <LabeledInput
        value={props.value.img}
        type="text"
        label="Image"
        id="img-input"
        setValue={props.setImg}/>
      <LabeledTextArea
        value={props.value.description}
        label="Description"
        id="description-input"
        setValue={props.setDescription}/>
      <Btn
        type="submit"
        title={props.btnTitle}/>
      {
        !props.edit ? '' :
          <Btn
            onClick={()=> {
              props.setDeleteMode(true)
            }}
            type="submit"
            title="Delete"/>
      }
      </Form>
    </section>
  )
}

export default FormTemplate