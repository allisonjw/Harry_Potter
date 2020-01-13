import React from 'react';
import './HousesContainer.scss';
import HouseCard from '../HouseCard/HouseCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const HousesContainer = props => {
   const { allHouses} = props
 
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
          <Link to='/character'>
            <button className='back_btn' >Back</button>
          </Link>
          <h2 className='houses_heading'>Hogwarts Houses</h2>
          </section>
          <section className="section_houses">
        {displayHouses}
        </section>
      </section>
  )
};

export const mapStateToProps = state => ({
    allHouses: state.allHouses, 
});

export default connect(mapStateToProps)(HousesContainer);

HousesContainer.propTypes = {
  allHouses: PropTypes.array
};
