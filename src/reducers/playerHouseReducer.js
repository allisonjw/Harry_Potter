export const playerHouseReducer = (state = '', action) => {
    switch(action.type) {
      case 'SET_HOUSE':
        return action.id;
      default:
        return state;
    }
};