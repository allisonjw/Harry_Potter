import React, { Component } from 'react';
import { getPotterApi } from '../../util/apiCalls';
import { addCharacters, addHouses, addSpells, isLoading } from '../../actions';
import Login from '../Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Charms from '../../components/Charms/Charms';
import Houses from '../Houses/Houses';
import Favorites from '../Favorites/Favorite';
import { Route } from 'react-router-dom';
import './App.scss';
// import { render } from 'enzyme';
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
    //   const { characters, houses, spells } = this.props;
    //   let allPaths = [...characters, ...houses, ...spells];
        return (
            <main className="App">
               <Route exact path='/login' render={() => <Login />} />
               <Route path='/houses' render={() => <> <Navbar /> <Houses /> </>}/>
               <Route path='/charms' render={() => <> <Navbar /> <Charms /> </>}/>
               <Route path='/favorites' render={() => <> <Navbar /> <Favorites /> </>}/>
            </main>
        )
    }
};

export const mapStateToProps = (allHouses, allCharacters, allSpells, isLoading) => ({
    allHouses,
    allCharacters,
    allSpells,
    isLoading,
});

export const mapDispatchToProps = dispatch => ({
    addCharacters: characters => dispatch(addCharacters(characters)),
    addHouses: houses => dispatch(addHouses(houses)),
    addSpells: spells => dispatch(addSpells(spells)),
    isLoading: bool => dispatch( isLoading(bool) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
