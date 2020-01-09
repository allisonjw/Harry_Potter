import React, { Component } from 'react';
import { getPotterApi } from '../../util/apiCalls';
import { addCharacters, addHouses, addSpells, isLoading } from '../../actions';
// import { bindActionCreators } from 'redux';
// import Header from '../../containers/Header/Header';
import Houses from '../Houses/Houses';
import { Route } from 'react-router-dom';
import './App.scss';
import { render } from 'enzyme';
import { connect } from 'react-redux';


export class App extends Component {
    componentDidMount = async() => {
        const { addCharacters, addHouses, addSpells, isLoading } = this.props;
        
        try {
          isLoading(true);
          const characters = await getPotterApi('characters');
          addCharacters(characters);
          const houses = await getPotterApi('houses');
          addHouses(houses);
          const spells = await getPotterApi('spells');
          addSpells(spells);
          isLoading(false)
    } catch({ message }) {
        isLoading(false)
      console.log(message);
    }
};
    
    render() {
        return (
            <main className="App">
                <h2>Welcome to Harry Potter</h2>
            </main>
        )
    }
};

export const mapStateToProps = state => ({
    allHouses: state.houses,
    allCharacters: state.characters,
    allSpells: state.spells,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    addCharacters: characters => dispatch(addCharacters(characters)),
    addHouses: houses => dispatch(addHouses(houses)),
    addSpells: spells => dispatch(addSpells(spells)),
    isLoading: bool => dispatch( isLoading(bool) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
