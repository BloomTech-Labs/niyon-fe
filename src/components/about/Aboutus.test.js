import React from 'react';
import { shallow } from 'enzyme';
// import { createShallow } from '@material-ui/core/test-utils';
import toJSON from 'enzyme-to-json';
import Aboutus from './Aboutus';
import Person from './Person';
import findByTestAttr from '../../tests/utils';


const setUp = (props={}) => {
   const component = shallow(<Aboutus />);
   return component;
}

describe('<Aboutus /> component testing', () => {
   let component;
   beforeEach(() => {
     component = setUp();
   });

  it('should match the snapshot test correctly', () => {
      expect(toJSON(component)).toMatchSnapshot();
   })

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

   describe('Testing team members rendering inside the component', () => {
    it('should render the team members on the component correctly', () => {         
         expect(component.find('.team')).toBeDefined();        
      });
    it('should render the <Person /> component correctly', () => {      
         expect(component.find('.team').at(0).find(Person).exists()).toBe(true);
         expect(component.find('.team').find(Person).length).toBe(7);
      });

      it('should match the  <Person /> snapshots "n" number of times', () => {         
           const result = component
                          .find('.team')
                          .find(Person)
                          .map( (node) => node );
            expect(toJSON(result)).toMatchSnapshot();           
      });     

   });

});
