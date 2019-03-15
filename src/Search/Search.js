import React, { useState, useEffect } from 'react'
import config from '../config'
import './Search.css'

import { ProjectCard } from '../Project/ProjectCard'

export const Search = props => {
  const [data, setData] = useState({
    projects: [],
    users: [],
  })

  const [searchType, setSearchType] = useState({
    type: "Projects"
  })

  const [serchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
    fetch(`${config.API_ENDPOINT}/data`)
      .then(res=> res.json())
      .then(res=> setData(res))

  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return <div className="Search">
    <header>
      <h2>Search</h2>
      <div>
        <form onSubmit={e=>handleSubmit(e)}>
          <fieldset>
            <div className="bar">
              <input type="text" onChange={e=>setSearchTerm(e.currentTarget.value)}/>
              <input type="submit" value="Search"/>
            </div>
            <div>
              <label htmlFor="Projects">Projects</label>
              <input id="Projects" type="radio" name="searchType" value="Projects" checked/>
              <label htmlFor="Users">Users</label>
              <input id="Users" type="radio" name="searchType" value="Users"/>
            </div>
          </fieldset>
        </form>
      </div>
      {data.projects.map(project=>{
        return <ProjectCard {...project}/>
      })}
    </header>
  </div>
}