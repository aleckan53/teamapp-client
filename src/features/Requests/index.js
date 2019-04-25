import React, { useContext } from 'react'
import RequestCard from './components/RequestCard'
import { Header, Msg } from '../Basic'
import context from 'context'

const Requests = props => {

  const { incoming, outgoing } = useContext(context.Events).requests

  return (
    <section className='Requests'>
      <Header h1='Requests'/>
      { !incoming.length ? '' : (
        <div>
          <h3>Incoming</h3>
          {incoming.map((r,i)=> 
            <RequestCard.Incoming {...r} key={i}/>
          )}
        </div>
      )}  
      { !outgoing.length ? '' : (
        <div>
          <h3>Outgoing</h3>
          {outgoing.map((r,i)=> 
            <RequestCard.Outgoing {...r} key={i}/>
          )}
        </div>
      )}
      { !incoming.length && !outgoing.length ? <Msg text="New requests appear here"/> : '' }
    </section>
  )
}

export default Requests