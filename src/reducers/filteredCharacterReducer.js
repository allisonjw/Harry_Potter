export const filteredCharacterReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.filteredStudents
        default:
            return state    
    }
}