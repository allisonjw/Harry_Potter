import React from 'react';
import './CharacterCard.scss'

export const CharacterCard = props => {
    const { name, house, dumbledoresArmy, bloodStatus  } = props
    return (
        <section className="section_character-card">
            <article className="article_character-cards">
                  <h3>NAME:  {name}</h3>
                  <img src=""></img>
                  <h3>HOUSE: {house}</h3>
                  <h3>DUMBLEDORE's ARMY: {dumbledoresArmy}</h3>
                  <h3>BLOOD STATUS: {bloodStatus}"</h3>
                  <button className="fav_btn">Favorite</button>
                </article>
        </section>
    )
}

export default CharacterCard;