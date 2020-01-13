import React from 'react';
import './CharmsContainer.scss';
import Charms from '../../components/Charms/Charms';
import { Link } from 'react-router-dom';
import '../CharmsContainer/CharmsContainer.scss';
import { PropTypes } from 'prop-types';

export const CharmsContainer = ({ allSpells }) => {

  const displaySpells = allSpells.map(spell => {
    return (
      <Charms
      {...spell}
      key={spell._id}
      />
    );
  });

  return (
    <section className="section_charms-main">
        <section className="section_charms-heading">
          <Link to='/houses'>
            <button className='back_btn'>Back to Houses</button>
          </Link>
          <h2 className='charms_heading'> charms</h2>
          </section>
          <p className="charms_matching">Charms and Spells Matching Game</p>
      <section className="section_charms">
          {displaySpells}
      </section>
    </section>
  )
};

export default CharmsContainer;

CharmsContainer.propTypes = {
  allSpells: PropTypes.array
}
