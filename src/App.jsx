/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

import { useContext } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//PAGES & COMPONENTES
import Home from './page/Home'
import About from './page/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Project from './page/Projects'
import Contact from './page/Contact'

//UTILS
import ScrollToTop from './Utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
 const appContext = useContext(AppContext)

 if (appContext.loading){

    return <LoadingSpinner/>
 }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
