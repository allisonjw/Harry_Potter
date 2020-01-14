import React from 'react';
import { shallow } from 'enzyme';
import { HouseCard, mapStateToProps, mapDispatchToProps } from './HouseCard';
import { addHouseCharacters } from '../../actions';

describe('HouseCard', () => {
 
    describe('Characters', () => {
        let mockAddHouseCharacters = [
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
    
           let mockAllCharacters = [
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

        let wrapper = shallow( <HouseCard 
            isLoading='false'
            addHouseCharacters={mockAddHouseCharacters}
            allCharacters={mockAllCharacters}
            name='Hufflepuff'
         />);

         it('should match snapshot with all information passing in correctly', () => {
             expect(wrapper).toMatchSnapshot();
         });
    });

    describe('mapStateToProps', () => {
        it('should return all state with their properties', () => {
            const mockState = {
                "isLoading": 'false',
                "allCharacters": [   
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
                 ],
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
                "isLoading": 'false',
                "allCharacters": [
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
                ],
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

    describe('mapDispatchToProps', () => {
        it('calls dispatch with an addHouseCharacters action when toggleFavorite is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addHouseCharacters([
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
                ]);

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.addHouseCharacters([
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
                ]);

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
    });
});