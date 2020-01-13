import React from 'react';
import './Favorite.scss';
import { connect } from 'react-redux';

export const Favorite = (props) => {
    const { name, house, dumbledoresArmy, bloodStatus, isLoading } = props
    return (
        <>
            {isLoading && <img className='loading-img' src='https://media.giphy.com/media/JonSfMu0Kzs5K9Wu7I/giphy.gif' alt='loading' />}
            {!isLoading && <article className="article_favorite-card">
                <h3>NAME:  {name}</h3>
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