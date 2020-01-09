import React, {Component} from 'react';
import './Houses.scss';
import CharactersContainer from '../CharacterContainer/CharacterContainer';
import { connect } from 'react-redux';


export class Houses extends Component {
  
    
    redirect = () => {
    }
    
    render() {
        console.log('houses', this.props.houses.housesReducer)
        return (
            // <Redirect to={`/movies/${this.props.id}`}/>
            <section className="section_house-main">
                <article className="article_house-cards">
                  <h3>name: "Hufflepuff"</h3>
                  <h3>mascot: "badger"</h3>
                  <h3>houseGhost: "The Fat Friar"</h3>
                  <p>values: "hard work", "patience", "justice", "loyalty"</p>
                  <p>colors: "yellow", "black"</p>
                    <button  
                        className="house_card_btn" 
                        type="submit" 
                        onClick={() => this.redirect()}>View Characters
                    </button>
                </article>
            </section>
        )
    }
}

export const mapStateToProps = houses => ({
    houses,
    // characters
});

export default connect(mapStateToProps)(Houses);
