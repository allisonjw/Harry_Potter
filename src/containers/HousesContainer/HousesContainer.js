import React from 'react';
import './HousesContainer.scss';
// import CharactersContainer from '../CharacterContainer/CharacterContainer';
import HouseCard from '../HouseCard/HouseCard';
import { connect } from 'react-redux';


export const HousesContainer = props => {
   const { allHouses } = props
 
    const displayHouses = allHouses.map(house => {
            return (
          <HouseCard
          {...house}
            key={house.id}
          />
          )
        })
    

        return (
              <section className="section_house-main">
                {displayHouses}
              </section>
        )
    }


export const mapStateToProps = state => ({
    allHouses: state.allHouses, 
});

export default connect(mapStateToProps)(HousesContainer);
