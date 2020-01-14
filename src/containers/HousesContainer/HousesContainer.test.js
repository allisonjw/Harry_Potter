import React from 'react';
import { shallow } from 'enzyme';
import { HousesContainer } from '../HousesContainer/HousesContainer';

describe('HousesContainer', () => {
    const mockAllHouses = [
        {
            _id: "5a05e2b252f721a3cf2ea33f",
            name: "Gryffindor",
            mascot: "lion",
            headOfHouse: "Minerva McGonagall",
            houseGhost: "Nearly Headless Nick",
            founder: "Goderic Gryffindor",
            __v: 0,
            school: "Hogwarts School of Witchcraft and Wizardry",
            members: [
            "5a0fa648ae5bc100213c2332",
            "5a0fa67dae5bc100213c2333"],
            values: [
                "courage",
                "bravery",
                "nerve",
                "chivalry"
                ],
                colors: [
                "scarlet",
                "gold"
                ]
        },
        {
            _id: "5a05da69d45bd0a11bd5e06f",
            name: "Ravenclaw",
            mascot: "eagle",
            headOfHouse: "Fillius Flitwick",
            houseGhost: "The Grey Lady",
            founder: "Rowena Ravenclaw",
            __v: 0,
            school: "Hogwarts School of Witchcraft and Wizardry",
            members: [
            "5a0fa8a6ae5bc100213c233b",
            "5a107ffee0686c0021283b21"],
            values: [
                "intelligence",
                "creativity",
                "learning",
                "wit"
                ],
                colors: [
                "blue",
                " bronze"
                ]
        }
      ];

      const mockAddHouses = [
        { 
            _id: "5a05e2b252f721a3cf2ea33f",
            name: "Gryffindor",
            mascot: "lion",
            headOfHouse: "Minerva McGonagall",
            houseGhost: "Nearly Headless Nick",
            founder: "Goderic Gryffindor",
            __v: 0,
            school: "Hogwarts School of Witchcraft and Wizardry",
            members: [
            "5a0fa648ae5bc100213c2332",
            "5a0fa67dae5bc100213c2333"],
            values: [
                "courage",
                "bravery",
                "nerve",
                "chivalry"
                ],
                colors: [
                "scarlet",
                "gold"
                ]
        }
      ];

    const wrapper = shallow(<HousesContainer  
        allHouses={mockAllHouses}
        addHouses={mockAddHouses}/>

);

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
});