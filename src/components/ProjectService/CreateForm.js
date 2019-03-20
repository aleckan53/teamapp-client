import React, { Component } from 'react'
import AppContext from '../../context/AppContext'

function withRequest (WrappedForm, props) {

  return class extends Component {
    static contextType = AppContext
    state = {
      title: '',
      img: '',
      description: '',
    }

    componentDidMount(){
      console.log('hoc props', props)
    }
  
    handleSubmit = () => {
      props.apiRequest(this.state)
      console.log(this.context)
    }

    render() {
      return (
        <WrappedForm 
          {...props}
          setTitle={title=>this.setState({title})} 
          setImg={img=>this.setState({img})}
          setDescription={description=>this.setState({description})}
          state={this.state}
          handleSubmit={()=>this.handleSubmit()}
          />
      )
    }
  }
}


const Form = props => {
  console.log(props)
  return (
    <form 
      id={props.name}
      onSubmit={e=>{
        e.preventDefault()
        props.handleSubmit()
      }}>
      <fieldset>
        <legend>{props.name}</legend>
        <div>
          <label>Title</label>
          <input 
            required
            type="text" 
            onChange={(e)=> props.setTitle(e.currentTarget.value)}/>
        </div>
        <div>
          <label>Image</label>
          <input 
            required
            type="text" 
            onChange={(e)=> props.setImg(e.currentTarget.value)}/>
        </div>
        <div>
          <label>Description</label>
          <textarea 
            required
            form="Form"
            onChange={(e)=> props.setDescription(e.currentTarget.value)}/>
        </div>
        <button type="submit">Submit</button>
        <p>{props.state.title}</p>
        <p>{props.state.img}</p>
        <p>{props.state.description}</p>
      </fieldset>
    </form>
  )
}

const forUpload = {
  name: 'Add Project',
  apiRequest: (proj)=>console.log('Add Project', proj)
}

export const UploadForm = withRequest(Form, {...forUpload})

const forUpdate = {
  name: 'Edit Project',
  apiRequest: (proj)=>console.log('Edit Project', proj)
}

export const UpdateForm = withRequest(Form, forUpdate)

