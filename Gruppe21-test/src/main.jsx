import React from 'react'
import ReactDOM from 'react-dom/client'
import RessursArkiv from './RessursArkiv'; // importerer ressursarkiv-appen
import './styles/style.css'; // importerer komprimert css fil fra sass

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RessursArkiv />
  </React.StrictMode>,

); 