import React from 'react'
import FormHOC from '../ProjectService/ProjectService'

const ProjectForm = props => {
  return (
    <section>
      <form
        className="ProjectForm"
        onSubmit={e=> props.handleSubmit(e)} 
        id={`${props.requestType}-form`}>
        <fieldset>
          <legend>{`${props.requestType} Project`}</legend>
          <div>
            <label>Title</label>
            <input
              value={props.value.title}
              onChange={e=>props.setTitle(e.currentTarget.value)}
              required 
              type="text" 
              id="text-input"/>
          </div>
          <div>
            <label>Image</label>
            <input
              value={props.value.img}
              onChange={e=>props.setImg(e.currentTarget.value)}
              required 
              type="text" 
              id="img-input"/>
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={props.value.description}
              onChange={e=>props.setDescription(e.currentTarget.value)}
              required
              form={`${props.requestType}-form`}
              id="description"/>
          </div>
          <button 
            type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  )
}

export default ProjectForm