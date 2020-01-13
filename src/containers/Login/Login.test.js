import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { addUser } from '../../actions/index';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';

describe('Login', () => {
    let wrapper;
    const mockAddUser = jest.fn();
    const mockHouse = ''
    const mockUser = {
      name: 'name',
      wizardType: 'wizard',
      house: ''
    }
    
    beforeEach(() => {
      wrapper = shallow (<Login 
        addUser={mockAddUser} 
        house={mockHouse}
        user={mockUser}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should update state when handleName is called',() => {
      const mockEvent = {
        target: {
          value: 'name'
        }
      }
      const expected = 'name'
      wrapper.instance().handleName(mockEvent)
      expect(wrapper.state('name')).toEqual(expected);
    });

    it('should update state when handleWizardType is called',() => {
      const mockEvent = {
        target: {
          name: 'wizardType',
          value: 'Witch'
        }
      };

      const expected = 'Witch'
      wrapper.instance().handleWizardType(mockEvent)
      expect(wrapper.state('wizardType')).toEqual(expected);
    });

    it('should create a new user when handleUser is called', () => {
      const mockUser = {
        name: '',
        wizardType: '',
        house: ''
      };

      wrapper.instance().handleUser();
      expect(mockAddUser).toHaveBeenCalledWith(mockUser)
    });

    it('should update state when clearInputs is called', () => {
      const mockState = {
        name: 'name',
        wizardType: 'witch',
        house: ''
      };

      const expected = ''
      wrapper.instance().clearInputs()
      expect(wrapper.state('name')).toEqual(expected);
    });

    describe('mapStateToProps', () => {
        it('should return an user object', () => {
            const mockUser =  { name: 'Allison', wizardType: 'witch', house: '' }

            const mockState = {
                user: mockUser
              };
        
              const expected = {
                  user: mockUser,
              };
        
              const mappedProps = mapStateToProps(mockState);
              expect(mappedProps).toEqual(expected);
        })
    });

    describe('mapDispatchToProps', () => {
        it('should call dispatch with the correct action when addUser is called', () => {
        const mockDispatch = jest.fn();
        const mockDispatchUser = { name: 'Allison', wizardType: 'Witch', house: '' };
        const dispatchedAction = addUser(mockDispatchUser);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.addUser(mockDispatchUser);
        expect(mockDispatch).toHaveBeenCalledWith(dispatchedAction);
        });
    });
});