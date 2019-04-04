import React, { useEffect, useState } from 'react'
import config from '../../config'
import TokenService from '../../services/TokenService'
import RequestCard from '../../components/RequestCard/RequestCard'
import { Header, HeaderBtn, Msg } from '../../components/Basic/Basic'
import { IoMdTrash as icon } from 'react-icons/io'
import EventSource from 'eventsource'

const RequestsStream = props => {

  const [state, setState] = useState({
    incoming: [],
    outgoing: [],
  })

  useEffect(()=> {
    // establishes open connection
    const source = new EventSource(`${config.API_ENDPOINT}/requests/users`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })

    source.onmessage = (e)=> {
      const msg = JSON.parse(e.data)
      setState({...msg})
    }

    source.onerror = () => {
      source.close()
    }

    return ()=> {
      // close connection on unmount
      source.close()
    }
  }, [])

  return (
    <section className='Requests'>
      <Header h1='Requests'>
        <HeaderBtn icon={icon}/>
      </Header>
      { state.incoming.length === 0 ? '' : (
        <div>
          <h3>Incoming</h3>
          {state.incoming.map((r,i)=> 
            <RequestCard.Incoming {...r} key={i}/>
          )}
        </div>
      )}  
      { state.outgoing.length === 0 ? '' : (
        <div>
          <h3>Outgoing</h3>
          {state.outgoing.map((r,i)=> 
            <RequestCard.Outgoing {...r} key={i}/>
          )}
        </div>
      )}
      { !state.incoming.length && !state.outgoing.length ? <Msg text="New requests appear here"/> : ''
      }
    </section>
  )
}

export default RequestsStream