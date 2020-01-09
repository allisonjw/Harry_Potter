export const housesReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_HOUSES':
            console.log(action.houses)
            return action.houses
        default:
            return state    
    }
};