import React, { Component } from 'react';
import './Charms.scss';
import { selectedCards } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export class Charms extends Component {
    constructor() {
        super();
        this.state ={
          index: 0,
          message: '',
          matched: !false,
          toggleModal: 'hide',
        }
      }

    checkAnswer = (e) => {
        e.preventDefault()
        const { _id, allSpells, spell, effect, matchSpells, selectedCards } = this.props
        const matches = allSpells.find(spells => spells._id === _id)
        // const spellName = e.target.name;
        // console.log('spelllll', spellName)
        // const spellEffect = e.target.id;
        if (spell & effect & _id) {
          this.setState({
            matched: !this.state.matched, 
            message: 'Wicked!',
            toggleModal: 'show'
        })
          setTimeout(() => {
            this.setState({toggleModal: 'hide'})
          }, 1000);
        } else {
          this.setState({
            message: 'Try Again!', 
            matched: this.state.matched,
            toggleModal: 'show'
        });
          setTimeout(() => {
            this.setState({toggleModal: 'hide'})
          }, 1000);
        }
        selectedCards(matches)
    };

    render() {
        const { matchSpells, spell, effect, _id  } = this.props;
        const toggleActiveName = matchSpells.map(spell => spell.spell).includes(spell) ? 'active_spell' : 'article_charms-cards-name' 
        const toggleActiveEffect = matchSpells.map(spell => spell.effect).includes(effect) ? 'active_effect' : 'article_charms-cards-effect'

        return (
            <>
                <section className="charm_names">
                <h3 className={`message ${this.state.toggleModal}`}>
                {this.state.message}</h3>
                    <article 
                        onClick={e => this.checkAnswer(e)}
                        name={spell}
                        id={_id}
                        className={toggleActiveName}>
                    <h3>NAME: {spell}</h3>
                    </article>
                </section>
                <section className="charm_effects">
                    <article 
                        onClick={e => this.checkAnswer(e)}
                        name={effect}
                        id={_id}
                        className={toggleActiveEffect}>
                    <h3>EFFECT: {effect}</h3>
                    </article>
                </section>
            </>
        )
    };
};    

export const mapStateToProps = state => ({
    allSpells: state.allSpells,
    matchSpells: state.matchSpells
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        selectedCards
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Charms);

Charms.propTypes = {
    allSpells: PropTypes.array
};
