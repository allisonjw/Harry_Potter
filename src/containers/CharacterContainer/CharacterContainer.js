import React, { Component } from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard'

export class CharacterContainer extends Component {
    constructor() {
        super()
        this.state = {}
    }

    displayCharacters = () => {
        return this.props.characters.map(character => {
            return (
            <CharacterCard
              {...character}
              key={character.id}
            />
            )
          })
    }

  render() {
      return (
          <>
          <p>CharacterContainer</p>
          <section className="section_houses-characters">
                    {this.displayCharacters}
         </section>
          </>
      )
  }

}

export default CharacterContainer;