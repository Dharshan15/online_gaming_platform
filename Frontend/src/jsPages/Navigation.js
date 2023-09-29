import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import "../cssPages/Navigation.css";

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <img className="logoLand" src={Logo} alt="Logo" />
      <ul className='landingUl'>
        <NavLink to='/games' activeClassName='activeLink'>
          <li className='LandList'>GAMES</li>
        </NavLink>
        <NavLink to='/esport' activeClassName='activeLink'>
          <li className='LandList'>ESPORTS</li>
        </NavLink>
        <NavLink to='/loginsignup' activeClassName='activeLink'>
          <li className='LandList'>SIGN IN</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
