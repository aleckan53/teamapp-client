import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
 
import './App.css'
import { NavBar } from './NavBar/NavBar'
import { Dashboard } from './Dashboard/Dashboard'
import { Footer } from './Footer/Footer'

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Route path='/dashboard' render={(props)=><Dashboard {...props}/>}/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App
