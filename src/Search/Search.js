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
  }, [data.currentPage])

  const handleSubmit = e => {
    e.preventDefault();
  }

  const setNextPage = () => {
    return data.currentPage === data.totalPages
      ? data.currentPage
      : setData({...data, currentPage: data.currentPage+1})
  }

  console.log(data)

  return <div className="Search">
    <header>
      <h2>Search</h2>
    </header>
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
        <fieldset>
          <div className="bar">
            <input type="text"/>
            <input type="submit" value="Search"/>
          </div>
        </fieldset>
      </form>
    </div>
    <div id="scrolableInSearch">
      <InfiniteScroll
        scrollableTarget="scrolableInSearch"
        dataLength={data.projects.length}
        next={()=>setNextPage()}
        hasMore={data.projects.length<data.totalCount}
        loader={<h4>Loading...</h4>}
        endMessage={<p className="bot-msg">That's it! You've reached the bottom.</p>}
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
