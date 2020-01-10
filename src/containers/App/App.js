import React, { Component } from 'react';
import { getPotterApi } from '../../util/apiCalls';
import { addCharacters, addHouses, addSpells, isLoading, addPotterPath } from '../../actions';
import Login from '../Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Charms from '../../components/Charms/Charms';
import Houses from '../HouseCard/HouseCard';
import Favorites from '../Favorites/Favorite';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './App.scss';
import { render } from 'enzyme';
import { connect } from 'react-redux';
import CharacterContainer from '../CharacterContainer/CharacterContainer';


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
            {console.log(this.props)}
            <main className="App">
               <Route exact path='/login' render={() => <Login />} />
               <Route path='/houses' render={() => <> <Navbar /> <Houses /> </>}/>
               <Route path='/charms' render={() => <> <Navbar /> <Charms /> </>}/>
               <Route path='/character' render={() => <> <Navbar /> <CharacterContainer /> </>}/>
               <Route path='/favorites' render={() => <> <Navbar /> <Favorites /> </>}/>
            </main>
            </Switch>
        )
    }
};

export const mapStateToProps = (allHouses, allCharacters, allSpells, isLoading) => ({
    allHouses,
    allCharacters,
    allSpells,
    isLoading,
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addCharacters, addHouses, addSpells, isLoading}, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
