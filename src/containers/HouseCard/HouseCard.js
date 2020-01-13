import React, {Component} from 'react';
import './HouseCard.scss';
import { addHouseCharacters } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export class HouseCard extends Component {
  
    charcHouse = () => {
        const {  allCharacters, name, addHouseCharacters } = this.props
        let filteredChars = allCharacters.filter(char => 'house' in char).filter(ch => ch.house === name)
        addHouseCharacters(filteredChars)
    };

    render() {
        const {  name, mascot, houseGhost, values, colors, isLoading } = this.props
        return (
            <section className="section_house-card">
                {isLoading && <img className='loading-img' src='https://media.giphy.com/media/JonSfMu0Kzs5K9Wu7I/giphy.gif' alt='loading' />}
                {!isLoading && <article className="article_house-cards">
                    <h3>NAME:  {name}</h3>
                    <img src="https://media.giphy.com/media/VuTPhjE6NIWzK/giphy.gif" alt="hogwarts school crest" className="house_crest"/>
                    <h3>MASCOT:  {mascot}</h3>
                    <h3>HOUSE GHOST:  {houseGhost}</h3>
                    <p>VALUES: {values}</p>
                    <p>COLORS: {colors}</p>
                    <Link to='./character'>
                        <button  
                        className="house_card-btn" 
                        type="submit" 
                        onClick={() => {this.charcHouse()}}>View Characters
                        </button>
                    </Link>
                  </article>}
            </section>
        )
    };
};

export const mapStateToProps = state => ({
    allHouses: state.allHouses, 
    allCharacters: state.allCharacters,
    filteredCharacters: state.filteredCharacters,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        addHouseCharacters: filteredStudents => dispatch( addHouseCharacters(filteredStudents) ) 
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseCard);

HouseCard.propTypes = {
    allCharacters: PropTypes.array,
    allHouses: PropTypes.array,
    filteredCharacters: PropTypes.array,
    isLoading: PropTypes.string
};