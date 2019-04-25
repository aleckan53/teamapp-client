import React, { useState, useEffect } from 'react'
import { Header, Input } from '../Basic'
import Scrollable from './components/Scrollable'
import Actions from './actions'

const Search = props => {
  const [state, setState] = useState({
    projects: [],
    totalProjects: null,
    currentPage: 1,
    searchTerm: '',
    showLoader: false,
  })

  // prevents unnecessary api calls when typing
  const [timer, setTimer] = useState()
  const [typing, setTyping] = useState(false)

  useEffect(() => { 
    if(!state.searchTerm.length) {
      Actions.initialLoad(timer, setTyping, state, setState)
    } else {
      Actions.delayedLoad(timer, setTimer, setTyping, state, setState)
    }
  }, [state.currentPage, state.searchTerm])

  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          showLoader={typing}
          value={state.searchTerm}
          style={{ paddingRight: '3rem' }}
          onChange={e => Actions.searchByTerm(e, state, setState)}
          type="text"/>
      <Scrollable
        next={() => Actions.nextPage(state, setState)}
        dataLength={state.projects.length}
        hasMore={state.projects.length < state.totalProjects}
        totalItems={state.totalProjects}
        items={state.projects}/>  
    </section>
  )
}

export default Search





