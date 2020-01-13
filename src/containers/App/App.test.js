import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getPotterApi } from '../../util/apiCalls';
import * as actions from '../../actions/index';

jest.mock('../../util/apiCalls.js');
jest.mock('../../actions');

describe('App', () => {
  let allCharacters = [{}, {}, {}]
  let allHouses = [{}, {}, {}]
  let allSpells = [{}, {}, {}]
  let wrapper = shallow(<App 
    addCharacters={actions.addCharacters}
    addHouses={actions.addHouses}
    addSpells={actions.addSpells}
    isLoading={actions.isLoading}
    allCharacters={allCharacters}
    allHouses={allHouses}
    allSpells={allSpells}
  />);

 it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
 });

  describe('componentDidMount', () => {
    it('should call addCharacters', () => {
    expect(actions.addCharacters).toHaveBeenCalled();
    });

    it('should call addHouses', () => {
      expect (actions.addHouses).toHaveBeenCalled();
    });

    it('should call addSpells', () => {
      expect(actions.addSpells).toHaveBeenCalled();
    });

    it('should call isLoading', () => {
      expect(actions.isLoading).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with 4 paths', () => {
      let allCharacters, allHouses, allSpells, isLoading;
      let mockState = {
        allCharacters,
        allHouses,
        allSpells,
        isLoading
      };
  
      let expected = {
        allCharacters,
        allHouses,
        allSpells,
        isLoading
      };
  
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected);

    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
  
    beforeEach(() => {
      mockDispatch = jest.fn();
    });
  
    it('should call dispatch with a addCharacters action', () => {
      const actionToDispatch = actions.addCharacters([{}, {}, {}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.addCharacters([{}, {}, {}]);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a addHouses action', () => {
      const actionToDispatch = actions.addHouses([{}, {}, {}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.addHouses([{}, {}, {}]);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a addSpells action', () => {
      const actionToDispatch = actions.addSpells([{}, {}, {}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.addSpells([{}, {}, {}]);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a isLoading action', () => {
      const actionToDispatch = actions.isLoading(true);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.isLoading(true);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});    