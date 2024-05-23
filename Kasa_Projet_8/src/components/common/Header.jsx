import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationBar} from './NavigationBar';

//importation d'une image de logo
import Logo from '../../assets/images/LOGO.svg';

//header composant
export const Header = () => {
  return (
    <header className='headerWrap'>
      <figure className='headerWrap_fig'>
        <Link to="/" aria-label="Logo">
          <img src={Logo} alt="Logo" className='logo'/>
        </Link>
      </figure>
      {/* navbar avec Accueil et A Propos boutons */}
      <NavigationBar className="nav-header"/>
    </header>
  );
}; 
