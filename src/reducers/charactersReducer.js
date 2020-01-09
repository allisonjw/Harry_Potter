export const charactersReducer = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_CHARACTERS':
         return action.characters
        default:
          return state  
    }
}