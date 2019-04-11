import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/TokenService'

const PrivateRoute = ({component, ...props}) => {
  const Component = component
  return (
    <Route
      {...props}
      render={renderProps => (
        !TokenService.hasAuthToken()
          ? <Redirect to={{
              pathname: '/login',
              state: {from: renderProps.location}
            }}/>
          : <Component 
            {...renderProps} 
            data={props.data}
            setData={props.setData}/>
      )} 
    />
  )
}

export default PrivateRoute