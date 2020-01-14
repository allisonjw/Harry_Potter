import React from 'react';
import { shallow } from 'enzyme';
import { addSpells, addFavorite } from '../../actions';
import { Navbar, mapStateToProps } from '../Navbar/Navbar';

describe('Navbar', () => {
    describe('Nav', () => {
      const mockUser = {
        name: 'name',
        wizardType: 'wizard',
        house: ''
      };

      const mockAllSpells = [
        {
            _id: "5b74ebd5fb6fc0739646754c",
            spell: "Aberto",
            type: "Charm",
            effect: "opens objects"
        },
        {
            _id: "5b74ecfa3228320021ab622b",
            spell: "Accio",
            type: "Charm",
            effect: "Summons an object",
            __v: 0
        }
      ]

      const mockFavoriteCharacters = [
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

      const wrapper = shallow(<Navbar
          user={mockUser}
          allSpells={mockAllSpells}
          favoriteCharacters={mockFavoriteCharacters}
      />)

      it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe.skip('mapStateToProps', () => {
       it('should return user state', () => {
           const mockUserState = {
            name: 'name',
            wizardType: 'wizard',
            house: ''
          };
           
           const expected = {
            name: 'name',
            wizardType: 'wizard',
            house: ''
          };

        const mappedProps = mapStateToProps(mockUserState);
        expect(mappedProps).toEqual(expected);
       });

       it('should return allSpells state', () => {
            const mockAllSpellsState = [
                {
                _id: "5b74ebd5fb6fc0739646754c",
                spell: "Aberto",
                type: "Charm",
                effect: "opens objects"
                }
            ];
            
            const expected = [
                {
                _id: "5b74ebd5fb6fc0739646754c",
                spell: "Aberto",
                type: "Charm",
                effect: "opens objects"
                }
            ];    

        const mappedProps = mapStateToProps(mockAllSpellsState);
        expect(mappedProps).toEqual(expected);
        });

       it('should return favoriteCharacters state', () => {
            const mockFavoriteCharactersState = [
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
                
            const expected = [
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

        const mappedProps = mapStateToProps(mockFavoriteCharactersState);
        expect(mappedProps).toEqual(expected);
       });
    });
});