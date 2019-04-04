import React, { useState, useEffect } from 'react'
import ProjectsService from '../../services/ProjectService'
import { Header, Input } from '../../components/Basic/Basic'
import Scrollable from '../../components/Scrollable/Scrollable'
import SearchService from './SearchService'

const Search = props => {
  const [projects, setProjects] = useState([])
  const [totalProjects, setTotalProjects] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => { 
    loadProjects(searchTerm, currentPage)
  }, [currentPage || searchTerm])

  useEffect(() => {
    if(searchTerm.length < 1) loadProjects()
    if(searchTerm) {
      setCurrentPage(1)
      SearchService.scrollTop('Scrollable')
      setShowLoader(true)
      setTimeout(()=> {
        setShowLoader(false)
        loadProjects(searchTerm)
      }, 600)
    }
  }, [searchTerm])

  const loadProjects = (term="", page=1) => {
    ProjectsService.getAllProjects(term, page)
      .then(res => {
          page > 1
            ? setProjects([...projects, ...res.projects])
            : setProjects(res.projects)
        setTotalProjects(res.count)
      })
      .catch(err=> console.error(err))
  }

  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          value={searchTerm}
          style={{
            paddingRight: '3rem',
            
          }}
          loading={showLoader || false}
          onChange={(e)=>setSearchTerm(e.target.value)}
          type="text"/>
      <Scrollable
          next={()=>SearchService.nextPage(currentPage, totalProjects, setCurrentPage)}
          dataLength={projects.length}
          hasMore={projects.length < totalProjects}
          totalItems={totalProjects}
          items={projects}/>  
    </section>
  )
}

export default Search





