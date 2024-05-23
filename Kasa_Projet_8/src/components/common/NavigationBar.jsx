import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// NavigationBar component to display Accueil and A Propos buttons
export const NavigationBar = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/About';

  return (
    <nav className='nav-header'>
      <Link to="/" aria-label="Home Page" className={`nav-header_link-home ${isHome ? 'active' : ''}`}>
        Accueil
      </Link>
      <Link to="/About" aria-label="About Page" className={`nav-header_link-about ${isAbout ? 'active' : ''}`}>
        A Propos
      </Link>
    </nav>
  );
};
