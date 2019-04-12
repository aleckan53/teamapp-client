import React, {useEffect} from 'react'
import TokenService from '../services/TokenService';

const EventsContext = React.createContext({

})

export default EventsContext

export const EventsProvider = props => {

  useEffect(() => {
    if(TokenService.getAuthToken()) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }, [TokenService.getAuthToken()])


  return (
    <EventsContext.Provider value={{

    }}>
      {props.children}
    </EventsContext.Provider>
  )
}