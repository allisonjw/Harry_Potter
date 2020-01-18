import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { housesReducer } from './housesReducer';
import { spellsReducer } from './spellsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { favoriteReducer } from './favoriteReducer'
import { filteredCharacterReducer } from './filteredCharacterReducer';
import { user } from './user';
import { playerHouseReducer } from './playerHouseReducer';

export const rootReducer = combineReducers({
    allCharacters: charactersReducer,
    allHouses: housesReducer,
    allSpells: spellsReducer,
    isLoading: isLoadingReducer,
    favoriteCharacters: favoriteReducer,
    filteredCharacters: filteredCharacterReducer,
    user,
    playerHouse: playerHouseReducer
});