import React from 'react';
import './HousesContainer.scss';
import HouseCard from '../HouseCard/HouseCard';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const HousesContainer = ({ allHouses }) => {
 
  const displayHouses = allHouses.map(house => {
    return (
      <HouseCard
        {...house}
        key={house._id}
      />
    )
  });

  return (
      <section className="section_house-main">
        <section className="section_houses-heading">
          <Link to='/login'>
            <button className='back_btn' >Back to Login</button>
          </Link>
          <h2 className='houses_heading'>Hogwarts Houses</h2>
          </section>
          <section className="section_houses">
        {displayHouses}
        </section>
      </section>
  )
};

export default HousesContainer;

HousesContainer.propTypes = {
  allHouses: PropTypes.array
};
