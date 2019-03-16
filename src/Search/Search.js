import React, { useState, useEffect } from 'react'
import config from '../config'
import './Search.css'

import { ProjectCard } from '../Project/ProjectCard'

export const Search = props => {
  const [data, setData] = useState({
    projects: [],
    users: [],
    currentLength: 0,
    totalLength: 0,
    currentPage: 1,
    totalPages: 1
  })

  useEffect(()=>{
    fetch(`${config.API_ENDPOINT}/search/featured?page=${data.currentPage}`)
      .then(res=> res.json())
      .then(res=> setData({
        ...data,
        projects: res.projects, 
        totalLength: Number(res.count),
        currentLength: res.projects.length,
        totalPages: Math.ceil(res.count/5)
      }))
  }, [data.currentPage])

  const setNextPage = () => {
    return data.currentPage === data.totalPages
      ? data.currentPage
      : setData({...data, currentPage: data.currentPage+1})
  }

  const setPrevPage = () => {
    return data.currentPage <= 1
      ? data.currentPage
      : setData({...data, currentPage: data.currentPage-1})
  }

  const handleSubmit = e => {
    e.preventDefault();
    
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
    <div className="Search__pagination">
      <button onClick={()=>setPrevPage()}>Prev</button>
      {/* page numbers go here */}
      <button onClick={()=>setNextPage()}>Next</button>
    </div>
    {data.projects.map((project, i)=>{
      return <ProjectCard key={i} {...project}/>
    })}
  </div>
}





{/* <div>
<label htmlFor="Projects">Projects</label>
<input id="Projects" type="radio" name="searchType" value="Projects" checked/>
<label htmlFor="Users">Users</label>
<input id="Users" type="radio" name="searchType" value="Users"/>
</div> */}
