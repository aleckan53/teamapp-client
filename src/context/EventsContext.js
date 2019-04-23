import React, { useState, useEffect } from 'react'
import TokenService from '../services/TokenService'
import RequestsService from '../services/RequestsService'

const EventsContext = React.createContext({
  authorized: false,
  requests: {
    outgoing: [],
    incoming: [],
  },
  setAuthorized: () => {},
})

export default EventsContext

export const EventsProvider = props => {
  const [state, setState] = useState({
    authorized: false,
    requests: {
      outgoing: [],
      incoming: [],
    },
  })
  
  useEffect(() => {
    if(TokenService.getAuthToken()) {
      setState({...state, authorized: true})
    }
  }, [])

  useEffect(() => {
    const updateState = data => {
      setState({
        ...state,
        requests: {
          outgoing: [...state.requests.outgoing, ...data.outgoing],
          incoming: [...state.requests.incoming, ...data.incoming],
        }
      })
    }
    RequestsService.getRequestsSse(state.authorized, updateState)
  }, [state.authorized])

  const setAuthorized = authorized => {
    setState({...state, authorized})
  }
  return (
    <EventsContext.Provider value={{
      authorized: state.authorized,
      requests: state.requests,
      setAuthorized,
    }}>
      {props.children}
    </EventsContext.Provider>
  )
}