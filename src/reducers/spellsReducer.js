export const spellsReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_SPELLS':
            return action.spells
        default:
            return state   
    }
}