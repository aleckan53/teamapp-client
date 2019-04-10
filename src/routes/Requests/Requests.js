import React, { useEffect, useState } from 'react'
import RequestCard from '../../components/RequestCard/RequestCard'
import { Header, Msg } from '../../components/Basic/Basic'
import RequestsService from '../../services/RequestsService'

const Requests = props => {

  const [state, setState] = useState({
    incoming: [],
    outgoing: [],
  })

  useEffect(()=> {
    // sse connection
    const src = RequestsService.getRequestsSse()

    src.onmessage = ev => {
      const data = JSON.parse(ev.data)
      // filters out 'accepted' and 'declined' requests
      const pendingOnly = data.incoming.filter(r => r.status === 'Pending')
      
      setState({
        incoming: [...state.incoming, ...pendingOnly],
        outgoing: [...state.outgoing, ...data.outgoing],
      })
    }

    src.onerror = () => {
      src.close()
    }

    return () => {
      src.close()
    }
  }, [])

  return (
    <section className='Requests'>
      <Header h1='Requests'/>
      { !state.incoming.length ? '' : (
        <div>
          <h3>Incoming</h3>
          {state.incoming.map((r,i)=> 
            <RequestCard.Incoming {...r} key={i}/>
          )}
        </div>
      )}  
      { !state.outgoing.length ? '' : (
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

export default Requests