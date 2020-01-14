import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps } from '../Navbar/Navbar';

describe('NavBar', () => {
    describe('Nav', () => {
      let mockUser = {
        name: 'name',
        wizardType: 'wizard',
        house: ''
      }

      let wrapper = shallow(<NavBar
          user={mockUser}
          allSpells={mockAllSpells}
          favoriteCharacters={mockFavoriteCharacters}
      />)

      it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('mapStateToProps', () => {
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
    });
});