import React, {Component} from 'react';
import './HouseCard.scss';
import CharactersContainer from '../CharacterContainer/CharacterContainer';
import { connect } from 'react-redux';


export const HouseCard = props => {
//   const { name, mascot, houseGhost, values, colors } = this.props
  
    
        // console.log('houses', allHouses)
        return (
            // <Redirect to={`/movies/${this.props.id}`}/>
            <section className="section_house-main">
                <article className="article_house-cards">
                  <h3>name:</h3>
                  <h3>mascot: "badger"</h3>
                  <h3>houseGhost: "The Fat Friar"</h3>
                  <p>values: "hard work", "patience", "justice", "loyalty"</p>
                  <p>colors: "yellow", "black"</p>
                    <button  
                        className="house_card_btn" 
                        type="submit" 
                        onClick={() => this.redirect()}>View Characters
                    </button>
                </article>
            </section>
        )
    }


export const mapStateToProps = state => ({
    // allHouses: state.houses, 
    allCharacters: state.characters
});

export default connect(mapStateToProps)(HouseCard);
