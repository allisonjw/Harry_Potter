import React from 'react';
import { connect } from 'react-redux';
import { Favorite } from '../Favorites/Favorite';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import '../FavoriteContainer/FavoriteContainer.scss'; 

export const FavoritesContainer = (props) => {
    const { allCharacters, favoriteCharacters, _id } = props;
    
    const findFavorite = favoriteCharacters.map((id) => {
    return allCharacters.find((character) => character._id === id);
  });

  const favCharacter = findFavorite.map((character) => {
    return <Favorite {...character} />
  })

    return (
      <section className='section_favorite'>
          <div className="section_favorite-heading">
          <Link to='/character'>
            <button className='back_btn' >Back</button>
          </Link>
          <h2 className='favorite_heading'>Favorite Characters</h2>
          </div>
            {favCharacter}
      </section>
    )
};

export const mapStateToProps = (state) => ({
    allCharacters: state.allCharacters,
    filteredCharacters: state.filteredCharacters,
    favoriteCharacters: state.favoriteCharacters,
    isLoading: state.isLoading
});

export default connect(mapStateToProps)(FavoritesContainer);