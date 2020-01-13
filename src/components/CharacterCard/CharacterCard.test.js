import React from 'react';
import { shallow } from 'enzyme';
import { CharacterCard, mapStateToProps, mapDispatchToProps } from './CharacterCard';
import { addFavorite, deleteFavorite } from '../../actions';

describe('CharacterCard', () => {
 
    describe('Characters', () => {
        let mockFavoriteCharacters = [
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
    
           let mockCharacterCard = [
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

        let wrapper = shallow( <CharacterCard 
            isLoading='false'
            CharacterCard={mockCharacterCard}
            favoriteCharacters={mockFavoriteCharacters}
            addFavorite='5b74f3653228320021ab628b'
            deleteFavorite='5b74f3653228320021ab628b'
         />);

         it('should match snapshot with all information passing in correctly', () => {
             expect(wrapper).toMatchSnapshot();
         });

         it.skip('should call toggleFavorite when image is clicked', () => {
             wrapper.instance().toggleFavorite = jest.fn();
             wrapper.find('.favorite_icon').simulate('click');
             expect(wrapper.instance().toggleFavorite).toHaveBeenCalled();
         });
    });

    describe('mapStateToProps', () => {
        it('should return all state with their properties', () => {
            const mockState = {
                "isLoading": 'false',
                "favoriteCharacters": [   
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
                "isLoading": 'false',
                "favoriteCharacters": [
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

    describe('mapDispatchToProps', () => {
        it('calls dispatch with an addFavorite action when toggleFavorite is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addFavorite('5b74f3653228320021ab628b');

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.addFavorite('5b74f3653228320021ab628b');

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });

          it('calls dispatch with an deleteFavorite action when toggleFavorite is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = deleteFavorite('5b74f3653228320021ab628b');
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.deleteFavorite('5b74f3653228320021ab628b');
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
    });
});