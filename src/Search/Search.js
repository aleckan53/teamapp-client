import React, { useState, useEffect } from 'react'
import config from '../config'
import './Search.css'

import { ProjectCard } from '../Project/ProjectCard'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Search = props => {
  const [data, setData] = useState({
    projects: [],
    totalCount: 0,
    currentPage: 1,
    totalPages: 1,
  })

  const [rerender, setRerender] = useState(false)

  const [searchTerm, setSearchTerm] = useState()

  useEffect(()=>{
    fetch(`${config.API_ENDPOINT}/search/featured?page=${data.currentPage}`)
      .then(res=> res.json())
      .then(res=> {
        setData({
          projects: [...data.projects, ...res.projects],
          totalCount: Number(res.count),
          currentPage: data.currentPage,
          totalPages: Math.ceil(res.count/7),
        })
      })
  }, [rerender])

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/search?searchTerm=${searchTerm}`)
      .then(res=> res.json())
      .then(res=> {
        setData({
          projects: res
        })
        scrollToTop()
      })
  }

  const setNextPage = () => {
    return data.currentPage === data.totalPages
      ? data.currentPage
      : setData({...data, currentPage: data.currentPage+1})
  }

  const scrollToTop = (v) => {
    document.getElementById('scrolableInSearch').scrollTop = 0
  }

  return <div className="Search">
    <header>
      <h2>Search</h2>
    </header>
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
        <fieldset>
          <div className="bar">
            <input type="text" onChange={(e)=>setSearchTerm(e.currentTarget.value)}/>
            <input type="submit" value="Search"/>
          </div>
        </fieldset>
      </form>
    </div>
    <div id="scrolableInSearch">
      <InfiniteScroll
        // onScroll={e=>console.log(e.target.scrollTop)}
        scrollableTarget="scrolableInSearch"
        dataLength={data.projects.length}
        next={()=>{
          setNextPage()
          setRerender(true)
        }}
        hasMore={data.projects.length<data.totalCount}
        loader={<p className="bot-msg">Loading...</p>}
        // endMessage={<hr/>}
        >
        {data.projects.map((project, i)=>{
          return <ProjectCard key={i} {...project}/>
        })}
      </InfiniteScroll>
    </div>
  </div>
}





{/* <div>
<label htmlFor="Projects">Projects</label>
<input id="Projects" type="radio" name="searchType" value="Projects" checked/>
<label htmlFor="Users">Users</label>
<input id="Users" type="radio" name="searchType" value="Users"/>
</div> */}
