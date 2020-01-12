import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';


export const CharacterContainer = props => {
  const {  filteredCharacters } = props

    const displayCharacters = filteredCharacters.map(character => {
          return (
            <CharacterCard
            {...character}
            key={character._id}
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
  filteredCharacters: state.filteredCharacters,
  isLoading: state.isLoading,
  allHouses: state.allHouses 
});

export default connect(mapStateToProps)(CharacterContainer);