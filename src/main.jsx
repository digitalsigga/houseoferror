import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import MainArticle from './MainArticle.jsx'
import Welcome from './welcome.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Welcome/>
      <Nav/>
      <MainArticle/>
      <Footer/>
  </React.StrictMode>,
)
