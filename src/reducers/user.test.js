import { user } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type ADD_USER', () => {
    const action = {
        type: 'ADD_USER',
        user: {
            name: "Allison",
            wizardType: "Witch",
            house: ""
        }
      };

      const expected = {
        name: "Allison",
        wizardType: "Witch",
        house: ""
      };

      const result = user({}, action);
      expect(result).toEqual(expected);
  });

});  