import React, {Component} from 'react';
import './Houses.scss';
import CharactersContainer from '../CharacterContainer/CharacterContainer';
import { connect } from 'react-redux';


export class Houses extends Component {
    constructor(props) {
        super (props)
        this.state = {}
    }


    render() {
        return (
            <section className="section_house-main">
                <article className="article_house-cards">
                  <h3>name: "Hufflepuff"</h3>
                  <h3>mascot: "badger"</h3>
                  <h3>houseGhost: "The Fat Friar"</h3>
                  <p>values: "hard work", "patience", "justice", "loyalty"</p>
                  <p>colors: "yellow", "black"</p>
                </article>
            </section>
        )
    }
}

export const mapStateToProps = state => ({
    houses: state.houses,
    characters: state.characters
});

export default connect(mapStateToProps)(Houses);
