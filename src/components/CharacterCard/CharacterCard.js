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

    // toggleCollection = (product) => {
    //     const { collection } = this.props;
    //     collection.map(product => product.id).includes(product.id) ? this.removeProduct(product) : this.addProduct(product);
    //   }
    
    //   addProduct = (product) => {
    //     const { collection, setCollection } = this.props;
    //     let newCollection = [...collection, product];
    //     setCollection(newCollection);
    //     localStorage.setItem('collection', JSON.stringify(newCollection));
    //   }
    
    //   removeProduct = (product) => {
    //     const { collection, setCollection } = this.props;
    //     let newCollection = collection.filter(savedProduct => savedProduct.id !== product.id);
    //     setCollection(newCollection);
    //     localStorage.setItem('collection', JSON.stringify(newCollection));
    //   }

    toggleFavorite = () => {
        const { addFavorite, deleteFavorite, favoriteCharacters, _id } = this.props;
        console.log(favoriteCharacters)
        this.setState({ favorite : !this.state.favorite })
        favoriteCharacters.includes(_id) ? deleteFavorite(_id) : addFavorite(_id);
    }; 

    render() {
        const { _id, name, house, dumbledoresArmy, bloodStatus, isLoading, favoriteCharacters  } = this.props
        const toggleWand = favoriteCharacters.includes(_id) ? 'chosen-wand' : 'favorite-wand';
        return (
            <section className="section_character-card">
              {isLoading && <img className='loading-img' src='https://media.giphy.com/media/JonSfMu0Kzs5K9Wu7I/giphy.gif' alt='loading' />}
              {!isLoading && <div className='categories-div'>
                <article className="article_character-cards">
                    <h3>NAME:  {name}</h3>
                    <h3>HOUSE: {house}</h3>
                    <h3>DUMBLEDORE's ARMY: {dumbledoresArmy}</h3>
                    <h3>BLOOD STATUS: {bloodStatus}"</h3>
                    <img src="https://media.giphy.com/media/Js1Fd7ANot7Q7ZXEcb/giphy.gif" alt="moving wand" className={toggleWand} onClick={() => this.toggleFavorite()}/>
                </article>
              </div>}    
            </section>
        )
    }
}

export const mapStateToProps = ( state ) => ({
    allCharacters: state.allCharacters,
    filteredCharacters: state.filteredCharacters,
    favoriteCharacters: state.favoriteCharacters,
    isLoading: state.isLoading
  })
  
  export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
      addFavorite,
      deleteFavorite
    }, dispatch)
  )

export default CharacterCard;