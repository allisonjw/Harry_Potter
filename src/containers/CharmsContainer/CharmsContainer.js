import React from 'react';
import './CharmsContainer.scss';
// import CharactersContainer from '../CharacterContainer/CharacterContainer';
import Charms from '../../components/Charms/Charms';
import { connect } from 'react-redux';
import '../CharmsContainer/CharmsContainer.scss';
// import { PropTypes } from 'prop-types';

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
      <section className="section_charms">
        {displaySpells}
      </section>
  )
};

export const mapStateToProps = state => ({
    allSpells: state.allSpells,
});

export default connect(mapStateToProps)(CharmsContainer);
