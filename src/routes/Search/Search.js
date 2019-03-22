import React, { useState, useEffect } from 'react'
import ProjectsService from '../../services/ProjectService'
import { Header, Input } from '../../components/Basic/Basic'
import Scrollable from '../../components/Scrollable/Scrollable'
 
const Search = props => {
  const [projects, setProjects] = useState([])
  const [totalProjects, setTotalProjects] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setCurrentPage(1)
    scrollToTop()
    loadProjects(searchTerm)
  }, [searchTerm])

  useEffect(() => { 
    loadProjects(searchTerm, currentPage)
  }, [currentPage])

  const loadProjects = (term="", page=1) => {
    ProjectsService.getAllProjects(term, page)
      .then(res => {
          page > 1
            ? setProjects([...projects, ...res.projects])
            : setProjects(res.projects)
        setTotalProjects(res.count)
      })
  }

  const scrollToTop = () => {
    const element = document.getElementById('Scrollable')
    if (element) element.scrollTop = 0
  }

  const nextPage = () => {
    return currentPage === Math.ceil(totalProjects/5)
      ? currentPage
      : setCurrentPage(currentPage+1)
  }
  
  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          style={{
            paddingRight: '3rem'
          }}
          loader={showLoader}
          setValue={setSearchTerm}
          type="text"/>
      <Scrollable
          next={nextPage}
          dataLength={projects.length}
          hasMore={projects.length < totalProjects}
          totalItems={totalProjects}
          items={projects}/>  
    </section>
  )
}

export default Search





