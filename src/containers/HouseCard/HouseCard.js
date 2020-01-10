import React from 'react';
import './HouseCard.scss';
// import CharacterContainer from '../CharacterContainer/CharacterContainer';
import { connect } from 'react-redux';

export const HouseCard = props => {
  const { name, mascot, houseGhost, values, colors } = props
  return (
      // <Redirect to={`/movies/${this.props.id}`}/>
      <section className="section_house-card">
                <article className="article_house-cards">
                  <h3>NAME:  {name}</h3>
                  <h3>MASCOT:  {mascot}</h3>
                  <h3>HOUSE GHOST:  {houseGhost}</h3>
                  <p>VALUES: "hard work", "patience", "justice", "loyalty"</p>
                  <p>COLORS: "yellow", "black"</p>
                    <button  
                        className="house_card-btn" 
                        type="submit" 
                        onClick={() => this.redirect()}>View Characters
                    </button>
                </article>
            </section>
        )
    }


export const mapStateToProps = state => ({
    allHouses: state.allHouses, 
    allCharacters: state.allCharacters
});

export default connect(mapStateToProps)(HouseCard);
