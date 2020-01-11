export const addCharacters = characters => ({
    type: 'ADD_CHARACTERS',
    characters
});

export const addHouses = houses => ({
    type: 'ADD_HOUSES',
    houses
});

export const addSpells = spells => ({
    type: 'ADD_SPELLS',
    spells
});

export const isLoading = isLoading => ({
    type: 'SET_LOADING',
    isLoading
});

export const addHouseCharacters = filteredStudents => ({
    type: 'SET_CHARACTERS',
    filteredStudents
});

export const addFavorite = (id) => ({
    type: 'ADD_FAVORITE',
    id
});
  
export const deleteFavorite = (id) => ({
    type: 'DELETE_FAVORITE',
    id
});