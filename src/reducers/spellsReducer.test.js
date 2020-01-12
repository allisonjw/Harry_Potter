import { spellsReducer } from './spellsReducer';

describe('spellsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = spellsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type ADD_SPELLS', () => {
    const action = {
        type: 'ADD_SPELLS',
        spells: [{
          _id: "5b74ebd5fb6fc0739646754c",
          spell: "Aberto",
          type: "Charm",
          effect: "opens objects"
        }]
      };

      const expected = [{
        _id: "5b74ebd5fb6fc0739646754c",
        spell: "Aberto",
        type: "Charm",
        effect: "opens objects"
      }]
      const result = spellsReducer([], action);
      expect(result).toEqual(expected);

  });
});  