import React from 'react';
import { connect } from 'react-redux';
import { Favorite } from '../Favorites/Favorite';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../FavoriteContainer/FavoriteContainer.scss'; 

export const FavoriteContainer = (props) => {
    const { allCharacters, favoriteCharacters } = props;
    
    const findFavorite = favoriteCharacters.map(id => {
      return allCharacters.find(character => character._id === id);
    });

    const favCharacter = findFavorite.map(character => {
      return <Favorite {...character}/>
    });

    return (
      <section className='section_favorite-background'>
          <section className="section_favorite-heading">
          <Link to='/houses'>
            <button className='back_btn' >Back to Houses</button>
          </Link>
          <h2 className='favorite_heading'>Favorite Characters</h2>
          </section>
          <section className="section_favorite">
            {favCharacter}
          </section>
      </section>
    )
};

export const mapStateToProps = (state) => ({
    allCharacters: state.allCharacters,
    favoriteCharacters: state.favoriteCharacters,
});

export default connect(mapStateToProps)(FavoriteContainer);

FavoriteContainer.propTypes = {
    allCharacters: PropTypes.array,
    favoriteCharacters: PropTypes.array,
}