import React, { Component } from 'react';
import { getPotterApi } from '../../util/apiCalls';
import { addCharacters, addHouses, addSpells, isLoading } from '../../actions';
import Login from '../Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Charms from '../../components/Charms/Charms';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import HousesContainer from '../HousesContainer/HousesContainer';
import Favorites from '../Favorites/Favorite';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './App.scss';
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
            <Switch>
               <Route exact path='/login' render={() => <Login />} />
               <Route path='/houses' render={() => <> <Navbar /> <HousesContainer /> </>}/>
               <Route path='/charms' render={() => <> <Navbar /> <Charms /> </>}/>
               <Route path='/character' render={() => <> <Navbar /> <CharacterContainer /> </>}/>
               <Route path='/favorites' render={() => <> <Navbar /> <Favorites /> </>}/>
            </Switch>
        )
    }
};

export const mapStateToProps = state => ({
    allCharacters: state.allCharacters,
    allHouses: state.allHouses,
    allSpells: state.allSpells,
    isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addCharacters, addHouses, addSpells, isLoading}, dispatch) 
};

export default connect(null, mapDispatchToProps)(App)
