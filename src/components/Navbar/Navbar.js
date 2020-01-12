import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { addSpells, addFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const Navbar = props => {
  const { allSpells, favoriteCharacters} = props
  return (
    <div className='navbar'>
      <NavLink to='/login' className={`nav_h3`}>HP</NavLink>
      <div className='nav_links'>
        <NavLink to='/CharmsContainer' onClick={() => addSpells(allSpells)}><button className='nav-btn'>Spells</button>
        </NavLink>
        <NavLink to='/FavoriteContainer' onClick={() => addFavorite(favoriteCharacters)}><button className='nav-btn'>Favorites</button>
        </NavLink>
      </div>
    </div>
  )
};

export const mapStateToProps = state => ({
  allSpells: state.allSpells,
  favoriteCharacters: state.favoriteCharacters,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addSpells, addFavorite }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
