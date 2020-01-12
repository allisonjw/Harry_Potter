import { isLoadingReducer } from './isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type SET_LOADING', () => {
        const action = {
          type: 'IS_LOADING',
          bool: true
        }
        const expected = false;
  
        const result = isLoadingReducer(undefined, action);
        expect(result).toEqual(expected);
      })
});