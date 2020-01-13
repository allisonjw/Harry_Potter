import { isLoadingReducer } from './isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type SET_LOADING', () => {
        const initialState = false;
        const action = {
          type: 'SET_LOADING',
          isLoading: true
        };
        const result = true;

    expect(isLoadingReducer(initialState, action)).toEqual(result);
  });
});