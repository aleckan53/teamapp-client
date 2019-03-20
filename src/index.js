import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

ReactDOM.render(
  <Router>
      <AppProvider>
        <App/>
      </AppProvider>
  </Router>,
  document.getElementById('root')
);

