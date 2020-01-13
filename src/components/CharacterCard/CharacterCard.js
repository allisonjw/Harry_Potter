import React, { Component } from 'react';
import './CharacterCard.scss';
import { addFavorite, deleteFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export class CharacterCard extends Component {
    constructor() {
        super()
        this.state = {
            favorite: !false,
        }
    };

    toggleFavorite = () => {
        const { addFavorite, deleteFavorite, favoriteCharacters, _id } = this.props;
        this.setState({ favorite : !this.state.favorite })
        favoriteCharacters.includes(_id) ? deleteFavorite(_id) : addFavorite(_id);
    }; 

    render() {
        const { favoriteCharacters, _id, name, house, dumbledoresArmy, bloodStatus, isLoading } = this.props
        const toggleMsg = favoriteCharacters.includes(_id) ? 'REMOVE FAVORITE' : 'ADD FAVORITE';
        return (
            <section className="section_character-card">
              {isLoading && <img className='loading-img' src='https://media.giphy.com/media/JonSfMu0Kzs5K9Wu7I/giphy.gif' alt='loading' />}
              {!isLoading && <article className="article_character-cards">
                    <h3>NAME:  {name}</h3>
                    <h3>HOUSE: {house}</h3>
                    <h3>DUMBLEDORE's ARMY: {dumbledoresArmy}</h3>
                    <h3>BLOOD STATUS: {bloodStatus}"</h3>
                    <h3>{toggleMsg}</h3>
                    <img src="https://media.giphy.com/media/lrJyGSrcCzLAwikcjv/giphy.gif" alt="moving goblet" className='favorite_icon' onClick={() => this.toggleFavorite()}/>
                </article>}
            </section>
        )
    };
};

export const mapStateToProps = ( state ) => ({
    favoriteCharacters: state.favoriteCharacters,
    isLoading: state.isLoading
});
  
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
      addFavorite: id => dispatch( addFavorite(id) ),
      deleteFavorite: id => dispatch( deleteFavorite(id) ),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);

CharacterCard.propTypes = {
    isLoading: PropTypes.string,
    filteredCharacters: PropTypes.array,
    favoriteCharacters: PropTypes.array,
    addFavorite: PropTypes.string,
    deleteFavorite: PropTypes.string
  
};