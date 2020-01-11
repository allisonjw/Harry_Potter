import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';


export const CharacterContainer = props => {
  const {  allCharacters } = props

    const displayCharacters = allCharacters.map(character => {
          return (
            <CharacterCard
              {...character}
              key={character.id}
            />
          );
    });

      return (
          <section className="section_houses-characters">
                    {displayCharacters}
         </section>
      )
  };


export const mapStateToProps = state => ({
  allCharacters: state.allCharacters,
  allHouses: state.allHouses, 
});

export default connect(mapStateToProps)(CharacterContainer);