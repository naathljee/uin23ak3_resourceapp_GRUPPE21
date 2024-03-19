import React from 'react';
import ReactDOM from 'react-dom/client';
import RessursArkiv from './RessursArkiv'; // importerer ressursarkiv-appen
import './Styles/Layout.scss'; // importerer komprimert css fil fra sass


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RessursArkiv />
  
  </React.StrictMode>,
);
