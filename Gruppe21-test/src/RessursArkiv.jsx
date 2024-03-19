
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Tabinnhold from './components/Tabinnhold'
import { resources } from './components/resources'

function RessursArkiv() {

// funksjon for å finne ressursene for hver kategori i arrayen i Resources.jsx
  const getResourceData = (category) => {
    return resources.find(res => res.category.toLowerCase() === category.toLowerCase())
  }


// setter opp router + navbar komponent over og router hver resurrsskategori 
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/html" element={<Tabinnhold {...getResourceData('HTML')} />} />
        <Route path="/css" element={<Tabinnhold {...getResourceData('CSS')} />} />
        <Route path="/javascript" element={<Tabinnhold {...getResourceData('Javascript')} />} />
        <Route path="/react" element={<Tabinnhold {...getResourceData('react')} />} />
        <Route path="/sanity" element={<Tabinnhold {...getResourceData('sanity')} />} />
      </Routes>
    </Router>
  )
}

export default RessursArkiv
