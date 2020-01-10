import React from 'react';
import './CharacterCard.scss'

export const CharacterCard = ( { name, } ) => {
    return (
        <section className="section_character-card">
            <article className="article_house-cards">
                  <h3>name:</h3>
                  <img alt="picture of student"></img>
                  <h3>house: "badger"</h3>
                  <h3>Dumbledore's Army: "The Fat Friar"</h3>
                  <h3>Blood Status: "hard work", "patience", "justice", "loyalty"</h3>
                    <button  
                        className="house_card_btn" 
                        type="submit" 
                        onClick={() => this.redirect()}>View Characters
                    </button>
                </article>
        </section>
    )
}

export default CharacterCard;