
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import TabContent from './components/TabContent'
import { resources } from './components/Resources'

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
        <Route path="/html" element={<TabContent {...getResourceData('HTML')} />} />
        <Route path="/css" element={<TabContent {...getResourceData('CSS')} />} />
        <Route path="/javascript" element={<TabContent {...getResourceData('Javascript')} />} />
        <Route path="/react" element={<TabContent {...getResourceData('react')} />} />
        <Route path="/sanity" element={<TabContent {...getResourceData('sanity')} />} />
      </Routes>
    </Router>
  )
}

export default RessursArkiv
