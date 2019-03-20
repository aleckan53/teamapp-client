import React from 'react'

export function withRequest (WrappedForm, props) {

  return class extends React.Component {
    state = {
      ...props,
    }

    render() {
      return (
        <WrappedForm
          props={this.state}
        />
      )
    }
  }
}

export const test = ({props}) => {
  console.log(props)
  return <p>{props.title}</p>
}

export const TestWrapped = withRequest(test, {title: 'title'})