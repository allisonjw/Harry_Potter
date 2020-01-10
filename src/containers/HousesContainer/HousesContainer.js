import React, {Component} from 'react';
import './Houses.scss';
// import CharactersContainer from '../CharacterContainer/CharacterContainer';
import HouseCard from '../HouseCard/HouseCard';
import { connect } from 'react-redux';


export class HousesContainer extends Component {
    constructor() {
        super()
        this.state = {}
    }
    getHouseData = () => {
    const houses = this.props.allHouses.map(house => house.name)
        console.log('fund', houses)
    }

    displayHouses = () => {
        console.log(this.props.allHouses.housesReducer)
        return this.props.allHouses.housesReducer.map(house => {
            console.log(house)
          return (
          <HouseCard
            {...house}
            key={house.id}
          />
          )
        })
      };

    redirect = () => {
    }
    
    render() {
        console.log('houses', this.props.allHouses)
        return (
            // <Redirect to={`/movies/${this.props.id}`}/>
            <section className="section_house-main">
                {this.displayHouses()}
            </section>
        )
    }
}

export const mapStateToProps = state => ({
    allHouses: state.houses, 
    allCharacters: state.characters
});

export default connect(mapStateToProps)(HousesContainer);
