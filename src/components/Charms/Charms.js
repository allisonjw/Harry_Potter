import React from 'react';
import './Charms.scss';
import { connect } from 'react-redux';

export const Charms = props => {
    const { _id, spell, type, effect } = props;
    return (
        <article className="article_charms-cards">
            <p>Charms and Spells Matching Game</p>
            <h3>NAME:  {spell}</h3>
            <h3>TYPE: {type}</h3>
            <h3>EFFECT: {effect}</h3>
        </article>
    )
}

export const mapStateToProps = state => ({
    allSpells: state.allSpells,
})

export default connect(mapStateToProps)(Charms);
