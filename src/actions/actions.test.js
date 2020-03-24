

    it('should have a type of ADD_HOUSES', () => {
        const houses = [{}, {}, {}];
        const expectedAction = {
            type: 'ADD_HOUSES',
            houses
        };
    const result = actions.addHouses(houses);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_SPELLS', () => {
        const spells = [{}, {}, {}];
        const expectedAction = {
            type: 'ADD_SPELLS',
            spells
        };
    const result = actions.addSpells(spells);
    expect(result).toEqual(expectedAction);

    });

    it('should have a type of SET_LOADING', () => {
        const isLoading = true;
        const expectedAction = {
            type: 'SET_LOADING',
            isLoading
        };
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expectedAction);

    });

    it('should have a type of SET_CHARACTERS', () => {
        const filteredStudents = [{}, {}, {}];
        const expectedAction = {
            type: 'SET_CHARACTERS',
            filteredStudents
        };
    const result = actions.addHouseCharacters(filteredStudents);
    expect(result).toEqual(expectedAction);

    });

    it('should have a type of ADD_FAVORITE', () => {
        const id = '5a0fa4daae5bc100213c232e';
        const expectedAction = {
            type: 'ADD_FAVORITE',
            id
        };

    const result = actions.addFavorite(id);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of DELETE_FAVORITE', () => {
        const id = '5a0fa4daae5bc100213c232e';
        const expectedAction = {
            type: 'DELETE_FAVORITE',
            id
        };

    const result = actions.deleteFavorite(id);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_USER', () => {
        const user = {name: 'Allison', wizardType: 'Witch', house: ''};
        const expectedAction = {
            type: 'ADD_USER',
            user
        };

    const result = actions.addUser(user);
    expect(result).toEqual(expectedAction);
    });

});