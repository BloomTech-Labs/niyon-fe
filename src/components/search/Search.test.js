import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';

const setUp = (props={}) => {
   const component = shallow(<Search />);
   return component;
}

describe('<Search /> component testing', () => {
   let wrapper;
   beforeEach(() => {
      wrapper = setUp();
   });

   it('should pass snaps shot testing', () => {
        expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render the <Search /> component correctly', () => {
        console.log(component.debug());
        expect(component.exists()).toBe(true);
   })
})