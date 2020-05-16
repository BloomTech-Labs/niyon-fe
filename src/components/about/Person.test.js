import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Person from './Person';
import findByTestAttr from '../../tests/utils';


const setUp = (props={}) => {
   let component = shallow(<Person { ...props } />);
   return component;
}

describe('<Person /> component testing',() => {
   let component;
   const testProps = {
      name: 'test-name',
      position: 'test-position'
   }
   beforeEach(() => {
      component = setUp(testProps);
   });

   it('should pass the snapshot test correctly', () => {
       expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render <Person /> component with no errors', () => {
      expect(component.length).toBe(1);
   });

   it('should render Person container',() => {
      const personContainer = findByTestAttr(component, 'person-container');
      expect(personContainer.length).toBe(1);
   });

   it('should render Person Image container',() => {
      const personImageContainer = findByTestAttr(component, 'person-image-container');
      expect(personImageContainer.length).toBe(1);
   });

   it('should render anchor tag for image link', () => {
      const a = component.find('a');
      expect(a.length).toBe(1);
   });

   it('should render <h2 /> correctly', () => {
       const header = component.find('h2');
       expect(header.exists()).toBe(true);      
   });

   it('should render header content correctly', () => {
      const header = component.find('h2');      
      expect(header.text()).toEqual(testProps.name);
   });

   it('should render <p/> correctly with its contents', () => {
       const paragraph = component.find('p');
       expect(paragraph.length).toBe(1);
       expect(paragraph.text()).toEqual(testProps.position);
   });

});
