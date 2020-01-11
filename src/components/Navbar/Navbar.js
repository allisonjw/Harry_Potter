import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/login' className={`nav_h3`}>HP</NavLink>
      <div className='nav_links'>
        <NavLink to='/Charms'><button className='nav-btn'>Spells</button>
        </NavLink>
        <NavLink to='/Favorites'><button className='nav-btn'>Favorites</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;