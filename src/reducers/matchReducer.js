export const matchReducer = (state=[], action) => {
    switch (action.type) {
        case 'MATCH':
            console.log('reducer',action.spell)
            console.log('redStat', state)
            return [...state, action.spell]    
        default:
            return state   
    }
}