import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { housesReducer } from './housesReducer';
import { spellsReducer } from './spellsReducer';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers({
    allCharacters: charactersReducer,
    allHouses: housesReducer,
    allSpells: spellsReducer,
    isLoading: isLoadingReducer,
})