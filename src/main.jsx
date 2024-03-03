import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Welcome from './Welcome.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import MainArticle from './MainArticle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome/>
    <Nav/>
    <MainArticle/>
    <Footer/>
  </React.StrictMode>,
)
