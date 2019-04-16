import React, { useState, useEffect } from 'react'
import ProjectsService from '../../services/ProjectService'
import { Header, Input } from '../../components/Basic/Basic'
import Scrollable from '../../components/Scrollable/Scrollable'

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
      clearTimeout(timer)
      loadProjects(state.searchTerm, state.currentPage)
      setTyping(false)
    } else {
      clearTimeout(timer)
      setTyping(true)
      setTimer(setTimeout(() => {
        loadProjects(state.searchTerm, state.currentPage)
        setTyping(false)
      }, 600))  
    }
  }, [state.currentPage, state.searchTerm])

  const loadProjects = (term="", page=1) => {
    ProjectsService.getAllProjects(term, page)
      .then(res => setState({
        ...state,
        totalProjects: res.count,
        // prevents bubbling up the state
        projects: page > 1 
          ? [...state.projects, ...res.projects]
          : res.projects 
      }))
  }
  
  const nextPage = () => {
    return state.currentPage === Math.ceil(state.totalProjects/8) // 5 = api response limit
      ? state.currentPage
      : setState({
        ...state,
        currentPage: ++state.currentPage
      })
  }

  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          showLoader={typing}
          value={state.searchTerm}
          style={{ paddingRight: '3rem' }}
          onChange={e => {
            document.getElementById('Scrollable').scrollTop = 0
            setState({
              ...state,
              searchTerm: e.target.value,
              currentPage: 1
            })}}
          type="text"/>
      <Scrollable
        next={() => nextPage()}
        dataLength={state.projects.length}
        hasMore={state.projects.length < state.totalProjects}
        totalItems={state.totalProjects}
        items={state.projects}/>  
    </section>
  )
}

export default Search





