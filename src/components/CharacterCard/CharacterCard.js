import React, { Component } from 'react';
import './CharacterCard.scss';
import { addFavorite, deleteFavorite } from '../../actions';
import { bindActionCreators } from 'redux';
// import { PropTypes } from 'prop-types';

export class CharacterCard extends Component {
    constructor() {
        super()
        this.state = {
            favorite: !false,
        }
    };

    toggleFavorite = () => {
        const { addFavorite, deleteFavorite, favoriteCharacters, _id } = this.props;
        console.log(favoriteCharacters)
        this.setState({ favorite : !this.state.favorite })
        favoriteCharacters.includes(_id) ? deleteFavorite(_id) : addFavorite(_id);
    }; 

    render() {
        const { name, house, dumbledoresArmy, bloodStatus  } = this.props
        return (
            <section className="section_character-card">
                <article className="article_character-cards">
                    <h3>NAME:  {name}</h3>
                    <img src=""></img>
                    <h3>HOUSE: {house}</h3>
                    <h3>DUMBLEDORE's ARMY: {dumbledoresArmy}</h3>
                    <h3>BLOOD STATUS: {bloodStatus}"</h3>
                    <button className="fav_btn" onClick={() => this.toggleFavorite()}>Favorite</button>
                    </article>
            </section>
        )
    }
}

export const mapStateToProps = ({ allCharacters, favoriteCharacters }) => ({
    allCharacters,
    favoriteCharacters
  })
  
  export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
      addFavorite,
      deleteFavorite
    }, dispatch)
  )

export default CharacterCard;