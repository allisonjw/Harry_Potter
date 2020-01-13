import React from 'react';
import './CharmsContainer.scss';
import Charms from '../../components/Charms/Charms';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../CharmsContainer/CharmsContainer.scss';
import { PropTypes } from 'prop-types';

export const CharmsContainer = props => {
  const {allSpells } = props
 
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
            <button className='back_btn'>Back</button>
          </Link>
          <h2 className='charms_heading'> charms</h2>
          </section>
      <section className="section_charms">
        {displaySpells}
      </section>
      </section>
  )
};

export const mapStateToProps = state => ({
    allSpells: state.allSpells,
});

export default connect(mapStateToProps)(CharmsContainer);

CharmsContainer.propTypes = {
  allSpells: PropTypes.array
}
