import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


export const CharacterContainer = props => {
  const { filteredCharacters } = props

    const displayCharacters = filteredCharacters.map(character => {
          return (
            <CharacterCard
            {...character}
            key={character._id}
            />
          );
    });

    return (
      <section className="section_character-main">
        <section className="section_character-heading">
          <Link to='/houses'>
            <button className='back_btn' >Back to Houses</button>
          </Link>
          <h2 className='character_heading'>Characters</h2>
          </section>
      <section className="section_characters">
        {displayCharacters}
        </section>
      </section>
    )
};

export const mapStateToProps = state => ({
  filteredCharacters: state.filteredCharacters,
});

export default connect(mapStateToProps)(CharacterContainer);

CharacterContainer.propTypes = {
  filteredCharacters: PropTypes.array,
}

