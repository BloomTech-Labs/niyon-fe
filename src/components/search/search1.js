import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';
import findByTestAttr from '../../tests/utils';

const setUp = (props={}) => {
   const wrapper = shallow(<Search />);
   return wrapper;
}

describe('<Search /> component testing', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   });

   it('should pass snaps shot testing', () => {
        expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render the <Search /> component correctly', () => {        
        expect(component.exists()).toBe(true);
   });
   it('should render <Header /> component correctly', () => {
        expect(component.find('Header').length).toBe(1);
   });

   it('should render container wrapper correctly', () => {
         const divContainer = findByTestAttr(component, 'search-container');
         expect(divContainer.length).toBe(1);
   });

   it('should render title correctly', () => {
        expect(component.find('h1').exists()).toBe(true);
        expect(component.find('h1').text()).toEqual('Search');
   });

   it('should render the <Footer /> component correctly', () => {
        expect(component.find('Footer').length).toBe(1);
   });
})