import React, { useState, useEffect } from 'react'
import config from '../config'
import './Search.css'

import ProjectCard from '../Project/ProjectCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const Search = props => {
  const [projects, setProjects] = useState([])
  const [totalProjects, setTotalProjects] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    scrollToTop()
    setCurrentPage(1)
    loadProjects(searchTerm)
  }, [searchTerm])

  useEffect(()=>{
    loadProjects(searchTerm, currentPage)
  }, [currentPage])


  const loadProjects = (term="", page=1) =>{
    fetch(`${config.API_ENDPOINT}/projects?term=${term}&page=${page}`)
    .then(res=> res.json())
    .then(res=> {
      if(page>1) {
        setProjects([...projects, ...res.projects])
      } else {
        setProjects(res.projects)
      }
      setTotalProjects(res.count)
    })
  }

  const scrollToTop = () => {
    document.getElementById('scrollableInSearch').scrollTop = 0
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
        console.log(currentPage)
      }}>
        <fieldset>
          <div className="bar">
            <input 
              type="text" 
              onChange={(e)=>setSearchTerm(e.currentTarget.value)} 
              required/>
            {/* <input type="submit" value="Search"/> */}
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
        loader={<p className="bot-msg">Loading...</p>}
        endMessage={totalProjects > 5 ? <p>That's it for now.</p> : ''}>
        {projects.map((p,i)=> <ProjectCard {...p}key={i} details={p}/>)}
      </InfiniteScroll>
    </div>
  </section>

}

export default Search





