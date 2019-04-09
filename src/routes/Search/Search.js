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
    term: ''
  })

  // TODO: make api request when user done typing
  useEffect(() => { 
    loadProjects(state.searchTerm, state.currentPage)
  }, [state.currentPage, state.searchTerm])

  const loadProjects = (term="", page=1) => {
    ProjectsService.getAllProjects(term, page)
      .then(res => {
        if(page > 1) {
          setState({
            ...state,
            projects: [...state.projects, ...res.projects],
            totalProjects: res.count
          })
        } else {
          setState({
            ...state,
            projects: res.projects,
            totalProjects: res.count,
          })
        }
      })
  }
  
  const nextPage = () => {
    return state.currentPage === Math.ceil(state.totalProjects/5)
      ? state.currentPage
      : setState({
        ...state,
        currentPage: ++state.currentPage
      })
  }

  const scrollTop = () => {
    return document.getElementById('Scrollable').scrollTop = 0
  }

  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          value={state.searchTerm}
          style={{ paddingRight: '3rem' }}
          onChange={e => {
            setState({
              ...state,
              searchTerm: e.target.value,
              currentPage: 1
            })
            scrollTop()
          }}
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





