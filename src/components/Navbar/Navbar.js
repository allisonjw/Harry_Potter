import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';
import { addSpells, addFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export const Navbar = props => {
  const { allSpells, favoriteCharacters, user, playerHouse} = props
  return (
    <div className='navbar'>
      <Link to='/login'>
      <img
      className={`nav_HP`}
      alt="harry potter intials"
      src={require('../../images/harry-potter-lightning-bolt-transparent-9.png')} 
      /></Link>
      <section className="user_info">
        <h2 className="nav_user-info">Welcome {user.name} the {user.wizardType} from {playerHouse}</h2>
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
  user: state.user,
  playerHouse: state.playerHouse
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addSpells, addFavorite }, dispatch) 
};

export default connect(mapStateToProps)(Navbar);

Navbar.propTypes = {
  allSpells: PropTypes.array,
  favoriteCharacters: PropTypes.array
};
