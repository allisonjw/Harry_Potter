import { housesReducer } from './housesReducer';

describe('housesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = housesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the correct state with action type ADD_HOUSES', () => {
    const action = {
        type: 'ADD_HOUSES',
        houses: [{
        _id: "5a05e2b252f721a3cf2ea33f",
        name: "Gryffindor",
        mascot: "lion",
        headOfHouse: "Minerva McGonagall",
        houseGhost: "Nearly Headless Nick",
        founder: "Goderic Gryffindor",
        __v: 0,
        school: "Hogwarts School of Witchcraft and Wizardry",
        members: ["5a0fa648ae5bc100213c2332",
        "5a0fa67dae5bc100213c2333",
        "5a0fa7dcae5bc100213c2338",
        "5a107e1ae0686c0021283b19"]
        }]
      };

      const expected = [{
        _id: "5a05e2b252f721a3cf2ea33f",
        name: "Gryffindor",
        mascot: "lion",
        headOfHouse: "Minerva McGonagall",
        houseGhost: "Nearly Headless Nick",
        founder: "Goderic Gryffindor",
        __v: 0,
        school: "Hogwarts School of Witchcraft and Wizardry",
        members: ["5a0fa648ae5bc100213c2332",
        "5a0fa67dae5bc100213c2333",
        "5a0fa7dcae5bc100213c2338",
        "5a107e1ae0686c0021283b19"]
      }]
      const result = housesReducer([], action);
      expect(result).toEqual(expected);
  });

});  