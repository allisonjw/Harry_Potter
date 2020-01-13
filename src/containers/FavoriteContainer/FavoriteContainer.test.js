import React from 'react';
import { FavoriteContainer, mapStateToProps } from './FavoriteContainer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('FavoriteContainer', () => {

    describe('favorites', () => {

       let mockFavoriteCharacter = [
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
         }
       ];

       let mockAllCharacters = [
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
          },
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
          } 
       ];

       let wrapper = shallow( <FavoriteContainer 
               favoriteCharacters={mockFavoriteCharacter}
                allCharacters={mockAllCharacters}
       /> )
       
      it('should match snapshot with all information passing in correctly', () => {
         expect(wrapper).toMatchSnapshot();
      })
    })

    describe('mapStateToProps', () => {
        it('should return a allCharacters and favoriteCharacters object', () => {
            const mockState = {
               "favoriteCharacters": [   
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
                    }
                ],
               "allCharacters": [
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
                    }
               ],
            }
            const expected = {
               "favoriteCharacters": [
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
                    }
               ],
                "allCharacters": [
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
                    }
                ],
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
        });
    });
});