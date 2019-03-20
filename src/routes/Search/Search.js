import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from 'react-loader-spinner'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ApiService from '../../services/api-service'
import './Search.css'


const Search = props => {
  const [projects, setProjects] = useState([])
  const [totalProjects, setTotalProjects] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [showDots, setShowDots] = useState(false)

  useEffect(() => {
    if(searchTerm) {
      setShowDots(true)
    }
    scrollToTop()
    setCurrentPage(1)
    loadProjects(searchTerm)
    setTimeout(() => setShowDots(false), 2000)
  }, [searchTerm])

  useEffect(() => { 
    loadProjects(searchTerm, currentPage)
  }, [currentPage])

  const loadProjects = (term="", page=1) => {
    ApiService.getAllProjects(term, page)
      .then(res => {
          page>1
            ? setProjects([...projects, ...res.projects])
            : setProjects(res.projects)
        setTotalProjects(res.count)
      })
  }

  const scrollToTop = () => {
    const element = document.getElementById('scrollableInSearch')

    if (element) element.scrollTop = 0
    
  }

  const nextPage = () => {
    return currentPage === Math.ceil(totalProjects/5)
      ? currentPage
      : setCurrentPage(currentPage+1)
  }

  return <section className="Search">
    <header>
      <h1>Search</h1>
    </header>
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        setCurrentPage(1)
        loadProjects(searchTerm, currentPage)
      }}>
        <fieldset>
          <div className="bar">
            <input 
              type="text" 
              onChange={(e)=>setSearchTerm(e.currentTarget.value)} 
              required/>
            {!showDots ? '' : <div className="dots">
              <Loader color="#ff2e63" type="ThreeDots" width="30px"/>
            </div>}
          </div>
        </fieldset>
      </form>
    </div>
    <div id="scrollableInSearch">
      <InfiniteScroll
        next={()=> nextPage()}
        scrollableTarget="scrollableInSearch"
        dataLength={projects.length}
        hasMore={projects.length<totalProjects}
        loader={<div className="Loader"><Loader color="#ff2e63" type="ThreeDots" width="30px"/></div>}
        endMessage={totalProjects > 5 ? <p className="bot-msg">That's it for now.</p>: ''}>
        {projects.map((p,i)=> <ProjectCard key={i} project={p}/>)}
      </InfiniteScroll>
    </div>
  </section>

}

export default Search





