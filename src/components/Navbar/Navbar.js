import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <h3>HP</h3>
      <div className='Nav-links'>
        <NavLink to='/Charms'><button className='nav_spell-btn'>Spells</button>
        </NavLink>
        <NavLink to='/Favorites'><button className='nav_fav-btn'>Favorites</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;