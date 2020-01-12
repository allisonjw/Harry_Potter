import { favoriteReducer } from '../reducers/favoriteReducer';

describe('favoriteReducer', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = favoriteReducer(undefined, []);
        expect(result).toEqual(expected);
    })

    it('should return the correct state with action type ADD_FAVORITE', () => {
       const action = {
           type: 'ADD_FAVORITE',
           id: '24234'
       }

       const expected = ['24234'];
       const result = favoriteReducer(undefined, action);
       expect(result).toEqual(expected);
    })

    it('should return the correct state with action type DELETE_FAVORITE', () => {
        const action = {
          type: 'DELETE_FAVORITE',
          id: '24234'
        }
        
        const initial = ['2323', '43423', '24234']
        const expected = ['2323', '43423'];
        const result = favoriteReducer(initial, action);
        expect(result).toEqual(expected);
    })
})