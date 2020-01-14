import React from 'react';
import { shallow } from 'enzyme';
import { CharmsContainer } from '../CharmsContainer/CharmsContainer';

describe('CharmsContainer', () => {
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
      ];

      const mockAddSpells = [
        { 
            _id: "5b74ebd5fb6fc0739646754c",
            spell: "Aberto",
            type: "Charm",
            effect: "opens objects"
        }
      ];

    const wrapper = shallow(<CharmsContainer  
        allSpells={mockAllSpells}
        addSpells={mockAddSpells}/>

);

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
});
