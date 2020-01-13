import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { addSpells, addFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export const Navbar = props => {
  const { allSpells, favoriteCharacters, user} = props
  return (
    <div className='navbar'>
      <NavLink to='/login' className={`nav_h3`}>HP</NavLink>
      <section className="user_info">
      <h2 className="nav_user-info">{user.name}</h2>
      <h2 className="nav_user-info">{user.wizardType}</h2>
      </section>
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
  user: state.user
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addSpells, addFavorite }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

Navbar.propTypes = {
  allSpells: PropTypes.array,
  favoriteCharacters: PropTypes.array
};
