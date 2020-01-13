import React from 'react';
import './Charms.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export const Charms = props => {
    const { spell, type, effect } = props;
    return (
        <>
        <section className="charm_names">
             <article className="article_charms-cards-name">
                <h3>NAME:  {spell}</h3>
                <h3>TYPE: {type}</h3>
            </article>
      </section>
      <section className="charm_effects">
           <article className="article_charms-cards-effect">
                <h3>EFFECT: {effect}</h3>
                <h3>TYPE: {type}</h3>
        </article>
      </section>
      </>
    )
};

export const mapStateToProps = state => ({
    allSpells: state.allSpells,
});

export default connect(mapStateToProps)(Charms);

Charms.propTypes = {
    allSpells: PropTypes.array
};
