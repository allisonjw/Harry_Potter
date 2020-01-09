import React, {Component} from 'react';
import './Houses.scss';
import CharactersContainer from '../CharacterContainer/CharacterContainer';
import { connect } from 'react-redux';


export class Houses extends Component {
    constructor(props) {
        super (props)
        this.state = {}
    }

    displayCharacters = () => {
        const allCharacters = this.props.characters.map(character => character.house)
            return (
            <CharactersContainer
              {...movie}
              key={movie.id}
            />
        )
    }

    render() {
        return (
            <section className="section_houses">
              {this.displayCharacters}
            </section>
        )
    }
}

export const mapStateToProps = state => ({
    characters: state.characters
})
