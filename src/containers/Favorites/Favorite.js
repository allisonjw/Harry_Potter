import React from 'react';
import './Favorite.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export const Favorite = (props) => {
    const { name, house, dumbledoresArmy, bloodStatus, isLoading } = props
    const houseCrest = house || 'hogwarts';
    return (
        <>
            {isLoading && <img className='loading-img' src='https://media.giphy.com/media/JonSfMu0Kzs5K9Wu7I/giphy.gif' alt='loading' />}
            {!isLoading && <article className="article_favorite-card">
                <h3>NAME:  {name}</h3>
                <img alt="house crest" className="favorite_houseCrest" src={require(`../../images/${houseCrest}.png`)}/>
                <h3>HOUSE: {house}</h3>
                <h3>DUMBLEDORE's ARMY: {dumbledoresArmy}</h3>
                <h3>BLOOD STATUS: {bloodStatus}"</h3>
            </article>}
        </>
        )
    };
export const mapStateToProps = ( state ) => ({
    favoriteCharacters: state.favoriteCharacters,
    isLoading: state.isLoading
});
      
export default connect(mapStateToProps)(Favorite);

Favorite.propTypes = {
    favoriteCharacters: PropTypes.array,
    isLoading: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string,
    dumbledoresArmy: PropTypes.bool,
    bloodStatus: PropTypes.string
};