import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Aboutus from './Aboutus';
import Person from './Person';
import findByTestAttr from '../../tests/utils';
import { ExpansionPanelActions } from '@material-ui/core';

const setUp = (props={}) => {
   const component = shallow(<Aboutus />);
   return component;
}

describe('<Aboutus /> component testing', () => {
   let component;
   beforeEach(() => {
     component = setUp();
   });

   it('should render <AboutUs /> component correctly', () => {
       expect(component.length).toBe(1);
   });

   it('should render main container for <Aboutus /> component correctly', () => {
      const aboutWrapper = findByTestAttr(component, 'aboutUs-container');
      expect(aboutWrapper.length).toBe(1);
   });

   it('should render container for teams in <Aboutus /> component', () => {
       const teamContainer = findByTestAttr(component, 'team-container');
       expect(teamContainer.length).toBe(1);
   });
   
});
