import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { connect } from 'react-redux';


export const CharacterContainer = props => {
  // const {  allCharacters } = this.props

    const displayCharacters = () => {
        return this.props.allCharacters.map(character => {
            return (
            <CharacterCard
              {...character}
              key={character.id}
            />
            )
          })
    }

      return (
          <>
          <section className="section_houses-characters">
                    {displayCharacters}
         </section>
          </>
      )
  }


export const mapStateToProps = state => ({
  allHouses: state.houses, 
  allCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterContainer);