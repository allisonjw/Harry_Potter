import { filteredCharacterReducer } from './filteredCharacterReducer';

describe('filteredCharacterReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = filteredCharacterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type SET_CHARACTERS', () => {
    const action = {
        type: 'SET_CHARACTERS',
        filteredStudents: [{
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Hufflepuff",
          ministryOfMagic: false,
          name: "Cedric Diggory",
          orderOfThePhoenix: false,
          role: "Student",
          school: "Hogwarts School of Witchcraft and Wizardry",
          species: "human",
          wand: 'Ash, 12 1/4", unicorn hair',
          __v: 0,
          _id: "5a1096253dc2080021cd875f"
        }]
      };

      const expected = [{
        bloodStatus: "pure-blood",
        deathEater: false,
        dumbledoresArmy: false,
        house: "Hufflepuff",
        ministryOfMagic: false,
        name: "Cedric Diggory",
        orderOfThePhoenix: false,
        role: "Student",
        school: "Hogwarts School of Witchcraft and Wizardry",
        species: "human",
        wand: 'Ash, 12 1/4", unicorn hair',
        __v: 0,
        _id: "5a1096253dc2080021cd875f"
      }]
      const result = filteredCharacterReducer([], action);
      expect(result).toEqual(expected);

  });
});  