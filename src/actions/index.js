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