import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { housesReducer } from './housesReducer';
import { spellsReducer } from './spellsReducer';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers({
    charactersReducer,
    housesReducer,
    spellsReducer,
    isLoadingReducer,
})