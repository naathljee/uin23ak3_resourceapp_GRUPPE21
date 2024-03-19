import React from 'react';
import { NavLink } from 'react-router-dom';



// funksjon for å liste de ulike valg elementene med NavLink fra react router dom 
function NavBar() {

// returnerer en liste med linker for hver kategori  og en if test for å sjekke etter active tab
  return (
    <ul className="meny-fane">
      <li><NavLink to="/html" id='navbarlinks' className={({ isActive }) => isActive ? 'active-tab' : undefined}>HTML</NavLink></li>
      <li><NavLink to="/css" id='navbarlinks' className={({ isActive }) => isActive ? 'active-tab' : undefined}>CSS</NavLink></li>
      <li><NavLink to="/javascript"  id='navbarlinks' className={({ isActive }) => isActive ? 'active-tab' : undefined}>JavaScript</NavLink></li>
      <li><NavLink to="/react" id='navbarlinks' className={({ isActive }) => isActive ? 'active-tab' : undefined}>React</NavLink></li>
      <li><NavLink to="/sanity" id='navbarlinks' className={({ isActive }) => isActive ? 'active-tab' : undefined}>Sanity and headless CMS</NavLink></li>
    </ul>
  );

}

export default NavBar;
