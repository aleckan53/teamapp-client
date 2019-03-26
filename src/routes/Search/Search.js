import React, { useState, useEffect } from 'react'
import ProjectsService from '../../services/ProjectService'
import { Header, Input } from '../../components/Basic/Basic'
import Scrollable from '../../components/Scrollable/Scrollable'
 
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
    if(searchTerm.length < 1) {
      loadProjects()
    }

    if(searchTerm) {
      setCurrentPage(1)
      scrollToTop()
      setShowLoader(true)
      setTimeout(()=> {
        setShowLoader(false)
        loadProjects(searchTerm)
      }, 2000)
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

  const scrollToTop = () => {
    const element = document.getElementById('Scrollable')
    if (element) element.scrollTop = 0
  }

  const nextPage = () => {
    return currentPage === Math.ceil(totalProjects/5)
      ? currentPage
      : setCurrentPage(currentPage+1)
  }

  console.log(searchTerm)
  
  return (
    <section className="Search">
      <Header h1="Search"/>
        <Input 
          value={searchTerm}
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





