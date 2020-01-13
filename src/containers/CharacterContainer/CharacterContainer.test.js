import React from 'react';
import { shallow } from 'enzyme';
import { addHouseCharacters } from '../../actions/index'
import { CharacterContainer, mapStateToProps } from '../CharacterContainer/CharacterContainer';

describe('CharacterContainer', () => {

  describe('FilteredCharacters', () => {
        const mockFilteredCharacters = [
            {
                _id: "5a0fa54aae5bc100213c232f",
                name: "Bathsheda Babbling",
                role: "Professor, Ancient Runes",
                school: "Hogwarts School of Witchcraft and Wizardry",
                __v: 0,
                ministryOfMagic: false,
                orderOfThePhoenix: false,
                dumbledoresArmy: true,
                deathEater: false,
                bloodStatus: "unknown",
                species: "human"
            },
            {
                _id: "5a0fa5deae5bc100213c2330",
                name: "Ludo Bagman",
                role: "Head, Department of Magical Games and Sports",
                __v: 0,
                ministryOfMagic: true,
                orderOfThePhoenix: false,
                dumbledoresArmy: false,
                deathEater: false,
                bloodStatus: "unknown",
                species: "human"
            }
          ];

          const mockAddHouseCharacters = [
            { 
              _id: "5a0fa4daae5bc100213c232e",
              name: "Hannah Abbott",
              role: "student",
              house: "Hufflepuff",
              school: "Hogwarts School of Witchcraft and Wizardry",
              __v: 0,
              ministryOfMagic: false,
              orderOfThePhoenix: false,
              dumbledoresArmy: true,
              deathEater: false,
              bloodStatus: "half-blood",
              species: "human"
            }
          ];

    const wrapper = shallow(<CharacterContainer  
        filteredCharacters={mockFilteredCharacters}
        addHouseCharacters={mockAddHouseCharacters}/>

    );

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
  });
    describe('mapStateToProps', () => {
        it('should return all state with their properties', () => {
            const mockState = {
                "filteredCharacters": [   
                  { 
                    _id: "5a0fa4daae5bc100213c232e",
                    name: "Hannah Abbott",
                    role: "student",
                    house: "Hufflepuff",
                    school: "Hogwarts School of Witchcraft and Wizardry",
                    __v: 0,
                    ministryOfMagic: false,
                    orderOfThePhoenix: false,
                    dumbledoresArmy: true,
                    deathEater: false,
                    bloodStatus: "half-blood",
                    species: "human"
                   }
                 ]
             };

             const expected = {
                "filteredCharacters": [
                   { 
                    _id: "5a0fa4daae5bc100213c232e",
                    name: "Hannah Abbott",
                    role: "student",
                    house: "Hufflepuff",
                    school: "Hogwarts School of Witchcraft and Wizardry",
                    __v: 0,
                    ministryOfMagic: false,
                    orderOfThePhoenix: false,
                    dumbledoresArmy: true,
                    deathEater: false,
                    bloodStatus: "half-blood",
                    species: "human"
                  }
                ]
             };
             const mappedProps = mapStateToProps(mockState);
             expect(mappedProps).toEqual(expected);
        });
    });
});